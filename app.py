from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/cards', methods=['GET'])
def get_cards():
    matches = [
    {'id': 1, 'team': 'TeamA', 'goals': 3, 'yellow_cards': 1, 'shots': 2, 'points': 0},
    {'id': 2, 'team': 'TeamB', 'goals': 1, 'yellow_cards': 2, 'shots': 5, 'points': 0},
    {'id': 3, 'team': 'TeamC', 'goals': 2, 'yellow_cards': 0, 'shots': 8, 'points': 0},
    {'id': 4, 'team': 'TeamD', 'goals': 0, 'yellow_cards': 3, 'shots': 3, 'points': 0},
    {'id': 5, 'team': 'TeamE', 'goals': 1, 'yellow_cards': 1, 'shots': 4, 'points': 0}
]
    
    for match in matches:
        match['points'] += match['goals'] * 30
        match['points'] -= match['yellow_cards'] * 5
        match['points'] += match['shots'] * 5

    return jsonify(matches)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)