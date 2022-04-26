from json import load
from flask import Blueprint, current_app, jsonify, request, make_response
import pandas as pd
import numpy as np
import os
import uuid
from datetime import datetime
import simplejson
from sklearn.preprocessing import OneHotEncoder
from sklearn.experimental import enable_iterative_imputer
from sklearn.impute import IterativeImputer

#helper functions
from .helpers import convert_blanks_to_nan, find_nan_counts

encoder = Blueprint(
    'encoder',
    __name__,
    url_prefix='/encoder'
)

def transform_mixed_to_numeric(series):
    """
    Convert a series of mixed data types to numeric
    input: series
    """

    # non-numerics are converted to NaN and removed
    output = pd.to_numeric(series, errors='coerce')
    output = output.dropna()        

    return output

def transform_one_hot_encode(series):
    working = pd.Series(series)
    working = working.dropna()
    index = working.index
    
    enc = OneHotEncoder(handle_unknown='ignore')
    vector = working.values.reshape(-1,1)
    enc.fit(vector)
    trans = enc.transform(vector).toarray()
    output = pd.DataFrame(trans, columns=enc.categories_, index=index).add_prefix(series.name + '_').astype('int')
    
    return output

def transform_category_to_binary(series, map):
    return series.map(map).astype('int')



def save_file(file_obj, storage_id):
    file_path = os.path.join(current_app.config['UPLOAD_FOLDER'], storage_id)
    file_obj.save(file_path)

def load_file(storage_id):
    file_path = os.path.join(current_app.config['UPLOAD_FOLDER'], storage_id)
    df = pd.read_csv(file_path)
    #Automatic fixes
    df = df.replace(r'^\s*$', np.nan, regex=True) #replaces empty strings spacess with NaN
    return df


def define_invalid_columns(df):
    valid_data_types = ['int16', 'int32', 'int64', 'float16', 'float32', 'float64', 'bool']

    valid = df.select_dtypes(include=valid_data_types)

    invalid = df.drop(columns=valid.columns)

    #process mixed data types
    transforms = {}

    for column in invalid.columns:
        col = invalid[column]

        total_count = col.shape[0]
        nan_count = col.isna().sum()

        col = col.dropna()
        not_nan_count = col.shape[0]

        numeric = ~pd.to_numeric(col, errors='coerce').isna()
        numeric_count = numeric.sum()

        if (numeric_count / total_count) > 0.6:
            invalid[column] = pd.to_numeric(col, errors='coerce')
            #proposed_transform
            transforms[column] = {
                'type': 'mixed_to_numeric',
                'nan_row_index': list(col[col.isna() == True].index),
                'non_numeric_row_index': list(numeric[numeric == False].index)
            } 
        
        # elif (len(col.unique()) == 2):
        #     mapping = {}
        #     for index, val in enumerate(col.unique()):
        #         mapping[val] = index
        #     #invalid[column] = col.map(mapping).astype('int')

        #     transforms[column] = {
        #         'type': 'category_to_binary',
        #         'map': mapping,
        #         'nan_row_index': list(col[col.isna() == True].index)
        #     }             
    
        # elif (len(col.unique()) > 2):
        else:
            transforms[column] = {
                'type': 'one_hot_encode',
                'unique_values': list(col.unique()),
                'nan_row_index': list(col[col.isna() == True].index)
            }

            
    return transforms, list(invalid.columns)

def apply_column_transforms(dataframe, transforms, target):
    df = pd.DataFrame(dataframe)
    for column in transforms:
        t = transforms[column]

        if t['type'] == 'mixed_to_numeric':
            df[column] = transform_mixed_to_numeric(df[column])

        elif t['type'] == 'category_to_binary':
            df[column] = transform_category_to_binary(df[column], t['map'])
        
        elif t['type'] == 'one_hot_encode':
            df = pd.concat([df, transform_one_hot_encode(df[column])], axis=1)
            df = df.drop(column, axis=1)

    #ensure target is converted to numeric
    try:
        df[target] = df[target].astype('int')
    except:
        print('cannot convert target to binary')

    #ensure target remains at end of file
    col_list = list(df.columns)
    i = col_list.index(target)
    reorder_list = col_list[:i] + col_list[i + 1:] + [target]
    df = df[reorder_list]
    return df 


@encoder.route('/apply_transforms',methods=['POST'])
def apply_transforms():
    

    output_files = {}
    nan_rows = {}

    target = request.headers['target']
    files = request.json['initialFiles']
    for file in files:
        print(file['name'])
        df = load_file(file['storageId'])

        transforms = file['invalidColumnsTransforms']

        df = apply_column_transforms(df, transforms, target)


        nan_rows[file['name']] = df[df.isna().any(axis=1)].shape[0]
        output_files[file['name']] = df.to_csv(index=True)

    result = {
        'files': output_files,
        'nan_rows': nan_rows
    }

    response = make_response(
        #Added to transform nan items to null when sending JSON
        simplejson.dumps(result, ignore_nan=True),
        # jsonify(final_object),
        200,
    )
    response.headers["Content-Type"] = "application/json"

    return response

@encoder.route('/manage_rows',methods=['POST'])
def manage_rows():
    
    output_files = {}

    target = request.headers['target']
    row_option = request.headers['rowOption']
    files = request.json['initialFiles']
    for file in files:

        df = load_file(file['storageId'])
        transforms = file['invalidColumnsTransforms']
        df = apply_column_transforms(df, transforms, target)


        print(row_option, 'row option')

        if (row_option == '0'):
            missing = df[df.isna().any(axis=1)]
            output = df.drop(missing.index)            
            output_files['missing_' + file['name']] = missing.to_csv(index=True)
            output_files[file['name']] = output.to_csv(index=True)
        elif (row_option == '1'):
            imp_mean = IterativeImputer(random_state=0)
            X = df.drop(columns=[target])
            y = df[target]
            imp_mean.fit(X)
            result = pd.DataFrame(imp_mean.transform(X),columns=X.columns)
            result[target] = y
            output_files[file['name']] = result.to_csv(index=True)

    result = {
        'files': output_files,
    }

    response = make_response(
        #Added to transform nan items to null when sending JSON
        simplejson.dumps(result, ignore_nan=True),
        # jsonify(final_object),
        200,
    )
    response.headers["Content-Type"] = "application/json"

    return response


@encoder.route('/store',methods=['POST'])
def encoder_store():

    #Object to store pipeline
    pipeline = {
        'pipelineId': str(uuid.uuid4()),
        'upload_time': datetime.timestamp(datetime.now()),
        'initialFiles': [],
        #'initialFilesValidation': None #TODO: Add validation
    }

    #Each file is uploaded as part of a multipart form with the same key 'files
    #Saving process
    files = request.files.getlist('files')
    for file in files:
        storage_id = str(uuid.uuid4())
        save_file(file, storage_id) #custom helper function
        pipeline['initialFiles'].append({   
            'storageId': storage_id,
            'name': file.filename,
        })
    
    #Read saved files and extract metadata
    for file in pipeline['initialFiles']:
        df = load_file(file['storageId'])
        transforms, invalid_columns = define_invalid_columns(df)
        file['invalidColumns'] = invalid_columns
        file['invalidColumnsTransforms'] = transforms
        file['rows'] = int(df.shape[0])
        file['columns'] = int(df.shape[1])
        file['columnNames'] = list(df.columns.values)       

    response = make_response(
        #Added to transform nan items to null when sending JSON
        simplejson.dumps(pipeline, ignore_nan=True),
        200,
    )
    response.headers["Content-Type"] = "application/json"

    return response    

