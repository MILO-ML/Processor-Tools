from flask import Blueprint, current_app, jsonify, request, make_response

from preprocessor_modules.shared import shared
from preprocessor_modules.colinearity import colinearity
from preprocessor_modules.featureselector import featureselector
from preprocessor_modules.encoder import encoder

import simplejson

parent_preprocessor = Blueprint(
    'parent_preprocessor',
    __name__,
    url_prefix='/preprocessor_api'
)

parent_preprocessor.register_blueprint(shared)
parent_preprocessor.register_blueprint(colinearity)
parent_preprocessor.register_blueprint(featureselector)
parent_preprocessor.register_blueprint(encoder)

#Audit Tool for Routes
@parent_preprocessor.route('/route_map',methods=['POST'])
def preprocessor_route_map():
    return simplejson.dumps([str(p) for p in current_app.url_map.iter_rules()])
