import os
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__, static_folder='../fronend/build', static_url_path='/')
CORS(app)
CORS(app, origins=['https://jackkieny.com', 'https://www.jackkieny.com'])

@app.route('/api')
def index():
    return jsonify({'message': 'Hello, World!'})

@app.route('/api/test')
def test():
    return jsonify({'message': 'This is a test!'})

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000, debug=True)