from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import boto3
import json, decimal
import flask.json

dynamodb = boto3.resource('dynamodb')


class MyJSONEncoder(flask.json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, decimal.Decimal):
            return str(obj)
        return super(MyJSONEncoder, self).default(obj)


app = Flask(__name__)
CORS(app)
app.json_encoder = MyJSONEncoder

store = dynamodb.Table('stores')
product = dynamodb.Table('products')


@app.route("/store", methods=['GET'])
@cross_origin()
def getStore():
    storeId = request.args['id']
    stores = store.get_item(
        Key={
            'id': int(storeId)
        }
    )
    if stores['Item'] is not None:
        stores['Item']['rating'] = str(stores['Item']['rating'])
        return jsonify(stores['Item'])
    else:
        return jsonify({"res": "Store not found"})


@app.route("/product", methods=['GET'])
@cross_origin()
def getProduct():
    productId = request.args['id']
    products = product.get_item(
        Key={
            'id': int(productId)
        }
    )
    if products['Item'] is not None:
        products['Item']['rating'] = str(products['Item']['rating'])
        return jsonify(products['Item'])
    else:
        return jsonify({"res": "Product not found"})


@app.route("/products", methods=['GET'])
@cross_origin()
def getProducts():
    storeId = request.args['storeId']
    product = dynamodb.Table('products')
    response = product.scan()
    products = response['Items']
    res = []
    while 'LastEvaluatedKey' in response:
        response = product.scan(ExclusiveStartKey=response['LastEvaluatedKey'])
        products.extend(response['Items'])
    for product in products:
        if product['storeId'] == storeId:
            res.append(product)
    return jsonify(res)


@app.route("/stores", methods=['GET'])
@cross_origin()
def getStores():
    response = store.scan()
    stores = response['Items']
    while 'LastEvaluatedKey' in response:
        response = store.scan(ExclusiveStartKey=response['LastEvaluatedKey'])
        stores.extend(response['Items'])
    return jsonify(stores)
