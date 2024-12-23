from flask import current_app
import pandas as pd
import numpy as np
import os
import uuid


def global_params():
    return {
        'min_training_class_size': 25,
    }

def convert_blanks_to_nan(df):
    return df.replace(r'^\s*$', np.nan, regex=True)

def find_nan_counts(df):
    return df[df.isna().any(axis=1)].shape[0]

def save_file(file_obj, storage_id):
    file_path = os.path.join(current_app.config['UPLOAD_FOLDER'], storage_id)
    file_obj.save(file_path)

def load_file(storage_id):
    file_path = os.path.join(current_app.config['UPLOAD_FOLDER'], storage_id)
    df = pd.read_csv(file_path)
    #Automatic fixes
    df = df.replace(r'^\s*$', np.nan, regex=True) #replaces empty strings spacess with NaN
    return df

def int_list_to_string(lst):
    return list(map(lambda n: str(n), lst))

def file_params(df):
    params = {}
    #size
    params['size'] = {}
    params['size']['rows'] = int(df.shape[0])
    params['size']['cols'] = int(df.shape[1])

    #missing values
    params['missing'] = {}
    ##rows
    params['missing']['rows'] = int(df[df.isna().any(axis=1)].shape[0])
    params['missing']['rowsPercent'] = float(round(params['missing']['rows'] / params['size']['rows'], 7) * 100)
    ##cells
    params['missing']['cells'] = int(df.isna().sum().sum())
    params['missing']['cellsPercent'] = float(round(params['missing']['cells'] / (params['size']['rows'] * params['size']['cols']), 7) * 100)
 
    #names
    params['names'] = {}
    params['names']['cols'] = list(df.columns.values)
    params['names']['colsReverse'] = list(df.columns.values)
    params['names']['colsReverse'].reverse()

    #describe
    skew = df.skew()
    skew.name = 'skew'

    describe = df.describe().append(skew).transpose()
    describe.reset_index(inplace=True)
    describe = describe.rename(columns={'index':'feature'})
    describe = describe.round({
        'mean': 1,
        'std': 1,
        'min': 1,
        '25%': 1,
        '50%': 1,
        '75%': 1,
        'max': 1,
        'skew': 1
    })
    params['describe'] = describe.to_dict(orient="records")


    return params    

def store_file_and_params(df, file_name, file_type):

    storage_id = str(uuid.uuid4())
    df.to_csv(os.path.join(current_app.config['UPLOAD_FOLDER'], storage_id), index=False)

    params = file_params(df)
    params['storageId'] = storage_id
    params['name'] = file_name
    params['type'] = file_type

    return params   

#create a smart binary map based on positive value names
def create_binary_map(unique_column_value_list):
    #list(df[column].unique())
    items = unique_column_value_list
    items.sort()

    positives = [
        'true',
        '1',
        'positive',
        'pos',
        'neg',
        'present',
        'yes',
        'active'
    ]

    result = {}

    for item in items:
        item_match = str(item).lower()
        val = any(list(map(lambda x: x in item_match, positives)))
        result[item] = int(val)

    if (0 in result.values() and 1 in result.values()):
        return result

    else:
        pick = list(result.keys())[0]
        result[pick] = int(not bool(result[pick]))
        return result