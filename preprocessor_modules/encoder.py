from flask import Blueprint, current_app, jsonify, request, make_response
import pandas as pd
import numpy as np
import os
import time
import json

import uuid

from datetime import datetime


encoder = Blueprint(
    'encoder',
    __name__,
    url_prefix='/encoder'
)

@encoder.route('/store',methods=['POST'])
def encoder_store():

    file_obj = request.files['file']
    filename = request.headers['filename'] #filename stored in special header

    if file_obj is None:
        # Indicates that no file was sent
        return "File not uploaded"

    storage_id = str(uuid.uuid4())

    file_path = os.path.join(current_app.config['UPLOAD_FOLDER'], storage_id)
    file_obj.save(file_path)

    #Script will try to read file and return data. If it fails it will delete
    #the file.
    # try:
    df = pd.read_csv(file_path)

    valid_data_types = ['int64','float64']
    invalid_columns = []

    for item in df.dtypes.keys():
        if df.dtypes[item] not in valid_data_types:
            invalid_columns.append(item)

    #params
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

    entry = {
    'user_id': 'ui000001',
    'storage_id': storage_id,
    'filename':  filename,
    'content_type': file_obj.content_type,
    'upload_time': datetime.timestamp(datetime.now()),
    'rows': int(df.shape[0]),
    'columns': int(df.shape[1]),
    'column_names': list(df.columns.values),
    'dtypes_count': json.loads(df.dtypes.value_counts().to_json()),
    'nan_by_column': json.loads(df.isna().sum().to_json()),
    'invalid_columns': list(invalid_columns),
    'describe': describe.to_json(orient="records")
    }

    response = make_response(
        jsonify(entry),
        200,
    )
    response.headers["Content-Type"] = "application/json"
    time.sleep(1)
    return response

    # except Exception as e:
    #
    #     os.remove(file_path)
    #     return abort(500)