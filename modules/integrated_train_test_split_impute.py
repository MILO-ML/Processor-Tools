
import pandas as pd
import numpy as np
import json

from .helpers import load_file, save_file, file_params, int_list_to_string, store_file_and_params, global_params

#LOCAL HELPERS



def fill_in_zeros(dict):
    if not 1 in dict:
        dict[1] = 0
    if not 0 in dict:
        dict[0] = 0
    return dict

def counts_to_percent(df):
    return round(df['counts'] / df['counts'].sum() * 100,1)


def merged_files_describe(df,target):

    describe = {}

    #counts
    total_df = pd.DataFrame(df[target].value_counts())
    total_df.rename(columns={target: 'counts'}, inplace=True)
    #percentage
    total_df['percent'] = counts_to_percent(total_df)

    total_df.loc['total'] = total_df.sum() #make total row

    describe['total'] = total_df.to_dict()        


    #nan values
    nan_df = df[df.isna().any(axis=1)][target].value_counts()
    nan_df = fill_in_zeros(nan_df)

    nan_df = pd.DataFrame(nan_df)
    nan_df.rename(columns={target: 'counts'}, inplace=True)

    nan_df['percent'] = round(nan_df['counts'] / total_df['counts'].loc['total'] * 100,1)

    nan_df.loc['total'] = nan_df.sum() #make total row

    describe['nan'] = nan_df.to_dict()


    #normal values
    non_nan_df = df[~df.isna().any(axis=1)][target].value_counts()
    non_nan_df = fill_in_zeros(non_nan_df)

    non_nan_df = pd.DataFrame(non_nan_df)
    non_nan_df.rename(columns={target: 'counts'}, inplace=True)

    non_nan_df['percent'] = counts_to_percent(non_nan_df)

    non_nan_df['percent'] = round(non_nan_df['counts'] / total_df['counts'].loc['total'] * 100,1)

    non_nan_df.loc['total'] = non_nan_df.sum() #make total row

    describe['non_nan'] = non_nan_df.to_dict()
    

    major = df[target].value_counts().idxmax()
    minor = df[target].value_counts().idxmin()

    #if the class sizes are the same, check to see if the non_missing data classes are the same and base the assignement on that
    if major == minor:
        if describe['non_nan']['counts'][0] > describe['non_nan']['counts'][1]:
            major = 0
            minor = 1
        else:
            major = 1
            minor = 0


    describe['major'] = int(major)
    describe['minor'] = int(minor)

    return describe



def merge_files_training_class_size(describe_obj):
    #takes describe object from merged_files_describe() and returns the appropriate class size for training
    minor_class = describe_obj['minor']
    minor_class_non_nan_counts = describe_obj["non_nan"]['counts'][minor_class]

    half_minor_class_non_nan_counts = round(minor_class_non_nan_counts / 2)


    min_training_class_size = global_params()['min_training_class_size']

    if half_minor_class_non_nan_counts < min_training_class_size:
        return min_training_class_size
    else:
        return half_minor_class_non_nan_counts


def merge_files_segments(describe_obj, training_class_size, missing_values_option, prevelence_option):

    print(describe_obj)

    major = describe_obj['major']
    minor = describe_obj['minor']


    #special condition to convert keys that are normally ints to strings if passed via json to avoid key error later
    #this applies only when applying the effect function because the describe_obj is coming from the front end
    try:
        describe_obj['non_nan']['counts'][major]
    except:
        major = str(describe_obj['major'])
        minor = str(describe_obj['minor'])


    if missing_values_option == 0 and prevelence_option == 0:
        #remove all rows with missing values and use all data
        test_major = describe_obj['non_nan']['counts'][major] - training_class_size
        test_minor = describe_obj['non_nan']['counts'][minor] - training_class_size
        remainder = 0
    
    elif missing_values_option == 0 and prevelence_option == 1:
        #remove all rows with missing values and keep original prevalences

        test_minor = describe_obj['non_nan']['counts'][minor] - training_class_size  

        ##TODO: make sure the right prevalences are used
        minor_prev = (describe_obj['total']['percent'][minor] / 100)
        major_prev = (describe_obj['total']['percent'][major] / 100)

        test_major = round((test_minor / minor_prev) * major_prev)
        print(test_major)
        remainder = describe_obj['non_nan']['counts'][major] - training_class_size - test_major   

    elif missing_values_option == 1 and prevelence_option == 0:
        test_major = describe_obj['total']['counts'][major] - training_class_size
        test_minor = describe_obj['total']['counts'][minor] - training_class_size
        remainder = 0     

    elif missing_values_option == 1 and prevelence_option == 1:
        test_minor = describe_obj['total']['counts'][minor] - training_class_size

        minor_prev = (describe_obj['total']['percent'][minor] / 100)
        major_prev = (describe_obj['total']['percent'][major] / 100)

        test_major = round((test_minor / minor_prev) * major_prev)

        remainder = describe_obj['total']['counts'][major] - training_class_size - test_major             


    total = training_class_size * 2 + test_major + test_minor + remainder


    return {
        'train': {
            'counts': {
                major: training_class_size,
                minor: training_class_size
            },
            'percent': {
                major: round((training_class_size / total) * 100,1) - 1,
                minor: round((training_class_size / total) * 100,1) - 1
            }
        },
        'test': {
            'counts': {
                major: test_major,
                minor: test_minor
            },
            'percent': {
                major: round((test_major / total) * 100,1) - 1,
                minor: round((test_minor / total) * 100,1) -1 
            }            
        },
        'remainder': {
            'counts': remainder,
            'percent': round((remainder / total) * 100,1)
        },
        'missing_values_option': missing_values_option,
        'prevelence_option': prevelence_option,
        'major': major,
        'minor': minor
    }





#ANALYSIS

def analyze_train_test_split_impute(fileObjectArray, target):
    groups = {
        'train': [],
        'test': [],
        'combined': [],
        'unknown': []
    }

    groups_result = {}

    
    result_array = []
    for file in fileObjectArray:

        print()

        df = load_file(file['storageId'])   
        if file['type'] == None:
            groups['unknown'].append(df)
        else:
            groups[file['type']].append(df)
        
    for group in groups:
        if len(groups[group]) > 0:
            df = pd.concat(groups[group])

            describe_obj = merged_files_describe(df,target)

            groups_result[group] = {}
            groups_result[group]['describe'] =  describe_obj
            training_class_size = merge_files_training_class_size(describe_obj)
            groups_result[group]['training_class_size'] = training_class_size
            groups_result[group]['segments'] = merge_files_segments(describe_obj, training_class_size, 0, 1)

           

    return {'fileAnalysisDict': groups_result} 


#EFFECT
def effect_train_test_split_impute(fileObjectArray, target, effect):

    segments = merge_files_segments(
        effect['describeObj'],
        effect['trainingClassSize'], 
        effect['missingValuesOption'], 
        effect['prevalenceOption']
        )

    return segments
    
    
    
    
    
    #return merge_files_segments(describe_obj, training_class_size, missing_values_options, prevelence_option)


#TRANSFORM
def transform_train_test_split_impute(fileObjectArray, target, transform):



    groups = {
        'train': [],
        'test': [],
        'combined': [],
        'unknown': []
    }

    df_groups = {}

    
    result_array = []
    for file in fileObjectArray:

        print()

        df = load_file(file['storageId'])   
        if file['type'] == None:
            groups['unknown'].append(df)
        else:
            groups[file['type']].append(df)
        
    for group in groups:
        if len(groups[group]) > 0:
            df = pd.concat(groups[group])

            df_groups[group] = df
    
    


    


    if 'combined' in df_groups:
        print('combined')
        df = df_groups['combined']

        t = transform['data']

        major = int(t['major'])
        minor = int(t['minor'])


        print(t)
        print(major, minor)

        df_nan = df[df.isna().any(axis=1)]
        df = df.drop(df_nan.index)
        
        df_major = df[df[target] == major]
        df_minor = df[df[target] == minor]

        
        df_train_minor = df_minor.sample(n=t['train']['counts'][str(minor)])
        df_train_major = df_major.sample(n=t['train']['counts'][str(major)])

        df_major = df_major.drop(df_train_major.index)
        df_minor = df_minor.drop(df_train_minor.index)

        df_test_minor = df_minor.sample(n=t['test']['counts'][str(minor)])
        df_test_major = df_major.sample(n=t['test']['counts'][str(major)])

        df_train = pd.concat([df_train_minor, df_train_major])
        df_test = pd.concat([df_test_minor, df_test_major])

        #TODO add extra data handling

        result = []


        result.append(store_file_and_params(df_train, 'train.csv', 'train'))
        result.append(store_file_and_params(df_test, 'test.csv', 'test'))
    

        return result




        
        
        










