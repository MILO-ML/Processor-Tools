from flask import Blueprint, current_app, request, make_response
import pandas as pd
import os
import simplejson

colinearity = Blueprint(
    'colinearity',
    __name__,
    url_prefix='/colinearity'
)

@colinearity.route('/generate',methods=["POST"])
def generate():
    storage_id = request.json['storage_id']
    file = os.path.join(current_app.config['UPLOAD_FOLDER'], storage_id)
    df = pd.read_csv(file)

    correlation_mat = df.corr()
    correlation_mat = correlation_mat.round(2)

    #d3 heat map data structure
    d3 = []
    for ind in correlation_mat.index:

        for y,val in correlation_mat[ind].iteritems():
            obj = {}
            obj['x'] = ind
            obj['y'] = y
            obj['val'] = val

            d3.append(obj)    

    #List Data
    corr_pairs = correlation_mat.unstack()
    sorted_pairs = corr_pairs.sort_values(kind="quicksort", ascending=False)

    list_of_pairs = []

    for item in sorted_pairs.index:
        l = list(item)
        l.sort()
        if l[0] != l[1]:
            entry = {
                'features': l,
                'value': sorted_pairs[item]
            }
            if entry not in list_of_pairs:
                list_of_pairs.append(entry)


    final_object = {
        "list": list_of_pairs,
        "d3": d3 #data structure for d3 heatmap
    }

    response = make_response(
        #Added to transform nan items to null when sending JSON
        simplejson.dumps(final_object, ignore_nan=True),
        # jsonify(final_object),
        200,
    )
    response.headers["Content-Type"] = "application/json"

    return response

@colinearity.route('build',methods=["POST"])
def build():
    storage_id = request.json['storage_id']
    feature_removal_list = request.json['feature_removal_list']

    file_path = os.path.join(current_app.config['UPLOAD_FOLDER'], storage_id)
    df = pd.read_csv(file_path)
    #change index to match excel
    df.index = df.index + 2

    df = df.drop(columns=feature_removal_list)

    #get missing data
    missing = df[df.isna().any(axis=1)]
    df = df.drop(missing.index)

    final_data = {
        'output_file': df.to_csv(index=False),
        'missing_file': missing.to_csv(index=True, index_label="source_row"),
        'missing_count': int(missing.shape[0]),
        'column_count': int(df.shape[1])
    }

    return make_response(final_data)
