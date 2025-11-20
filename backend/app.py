from flask import Flask, request, jsonify
from flask_cors import CORS
import json
from pathlib import Path
from classifier.engine import classify

app = Flask(__name__)
CORS(app)

RESOURCES_PATH = Path(__file__).parent / 'resources' / 'support_resources.json'

@app.route('/health')
def health():
    return jsonify({"status": "ok"})

@app.route('/resources')
def resources():
    try:
        data = json.loads(RESOURCES_PATH.read_text(encoding='utf-8'))
        return jsonify(data)
    except Exception:
        return jsonify([])

@app.route('/analyze', methods=['POST'])
def analyze():
    payload = request.get_json(force=True, silent=True) or {}
    text = (payload.get('text') or '').strip()
    if not text:
        return jsonify({"error": "Empty text"}), 400
    result = classify(text)
    result['raw_text_length'] = len(text)
    return jsonify(result)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
