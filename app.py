# from flask import Flask
# from flask_restful import Resource, Api

# app = Flask(__name__)
# api = Api(app)

# data = [
#     {'id': 1, 'title': 'Card 1', 'description': 'This is the first card.'},
#     {'id': 2, 'title': 'Card 2', 'description': 'This is the second card.'},
#     {'id': 3, 'title': 'Card 3', 'description': 'This is the third card.'},
# ]

# class DataResource(Resource):
#     def get(self):
#         return data

# api.add_resource(DataResource, '/api/data')

# if __name__ == '__main__':
#     app.run(debug=True)



from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/cards', methods=['GET'])
def get_cards():
    # cards = [
    #     {'id': 1, 'title': 'Card 1', 'description': 'This is the first card.'},
    #     {'id': 2, 'title': 'Card 2', 'description': 'This is the second card.'},
    #     {'id': 3, 'title': 'Card 3', 'description': 'This is the third card.'}
    # ]
    matches = [
    {'id': 1, 'team': 'TeamA', 'goals': 3, 'yellow_cards': 1, 'shots': 2, 'possession': 55, 'fouls': 12, 'corners': 4},
    {'id': 2, 'team': 'TeamB', 'goals': 1, 'yellow_cards': 2, 'shots': 5, 'possession': 45, 'fouls': 18, 'corners': 7},
    {'id': 3, 'team': 'TeamC', 'goals': 2, 'yellow_cards': 0, 'shots': 8, 'possession': 60, 'fouls': 9, 'corners': 3},
    {'id': 4, 'team': 'TeamD', 'goals': 0, 'yellow_cards': 3, 'shots': 3, 'possession': 40, 'fouls': 15, 'corners': 2},
    {'id': 5, 'team': 'TeamE', 'goals': 1, 'yellow_cards': 1, 'shots': 4, 'possession': 52, 'fouls': 11, 'corners': 6}
]
    return jsonify(matches)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)