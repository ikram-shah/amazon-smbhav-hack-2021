from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import boto3
import json
from decimal import Decimal


class fakefloat(float):
    def __init__(self, value):
        self._value = value
    def __repr__(self):
        return str(self._value)

def defaultencode(o):
    if isinstance(o, Decimal):
        # Subclass float with custom repr?
        return fakefloat(o)
    raise TypeError(repr(o) + " is not JSON serializable")

dynamodb = boto3.resource('dynamodb')

store = dynamodb.Table('stores')
product = dynamodb.Table('products')



app = Flask(__name__)
CORS(app)


@app.route("/store", methods=['GET'])
@cross_origin()
def getStore():
    storeId = request.args['id']
    print("store", storeId)
    print("ress", store.get_item(
        Key={
            'id': int(storeId)
        }))
    return json.dumps(store.get_item(
        Key={
            'id': int(storeId)
        }
    ), default=defaultencode)


@app.route("/product", methods=['GET'])
@cross_origin()
def getProduct():
    productId = request.args['id']
    print("productId", productId)
    return json.dumps(product.get_item(
        Key={
            'id': int(productId)
        }
    ), default=defaultencode)
