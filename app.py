from flask import Flask, request, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

API_KEY = 'abc_dev_tzqG6qwBh2QAgbyLKAH0pxnJ'
SECRET_KEY = 'abc_dev_tzqG6qwBh2QAgbyLKAH0pxnJ'
ABACATEPAY_URL = 'https://api.abacatepay.com/gerar-qrcode'  # Ajuste para a URL correta

@app.route('/gerar_qrcode', methods=['POST'])
def gerar_qrcode():
    data = request.get_json()
    valor = data.get('valor')
    descricao = data.get('descricao')

    if not valor or not descricao:
        return jsonify({'error': 'Dados incompletos'}), 400

    # Aqui você pode gerar um QR code fictício para teste
    qrcode_image = 'https://via.placeholder.com/150'
    qrcode_text = 'Código de pagamento de exemplo'

    return jsonify({
        'qrcode_image': qrcode_image,
        'qrcode_text': qrcode_text
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)