from flask import Flask
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)

data = [
    {'id': 1, 'title': 'Card 1', 'description': 'This is the first card.'},
    {'id': 2, 'title': 'Card 2', 'description': 'This is the second card.'},
    {'id': 3, 'title': 'Card 3', 'description': 'This is the third card.'},
]

class DataResource(Resource):
    def get(self):
        return data

api.add_resource(DataResource, '/api/data')

if __name__ == '__main__':
    app.run(debug=True)