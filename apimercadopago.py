import mercadopago
from flask import Flask, request, jsonify
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

sdk = mercadopago.SDK("APP_USR-8109665431428084-052119-9edc5d4d2d18f4a03873b338b1d68d97-274837030")

@app.route("/pagar", methods=["POST"])
def pagar():
    dados = request.json

    nome = dados.get("nome")
    telefone = dados.get("telefone")
    produtos = dados.get("produtos", [])
    meio_pagamento = dados.get("meio_pagamento", "pix")  # padrão é pix
    frete = float(dados.get("frete", 0))

    endereco = dados.get("endereco", {})
    rua = endereco.get("rua", "")
    bairro = endereco.get("bairro", "")
    numero = endereco.get("numero", "")
    complemento = endereco.get("complemento", "")

    # 🔥 Calcula subtotal baseado no meio de pagamento
    subtotal = 0
    for produto in produtos:
        if meio_pagamento == "cartao":
            preco = float(produto.get("preco_cartao", 0))
        else:
            preco = float(produto.get("preco", 0))

        subtotal += preco

    total = subtotal + frete

    # 🔥 Monta a descrição do pedido
    descricao = (
        f"Pedido de {nome}\n"
        f"Telefone: {telefone}\n\n"
        f"{produtos}\n\n"
        f"Subtotal: R$ {subtotal:.2f}\n"
        f"Frete: R$ {frete:.2f}\n"
        f"Total: R$ {total:.2f}\n\n"
        f"Endereço:\nRua: {rua}\nBairro: {bairro}\nNúmero: {numero}\nComplemento: {complemento}"
    )

    # 🔥 Cria a preferência de pagamento
    preference_data = {
        "items": [
            {
                "title": "Compra na Loja",
                "description": descricao,
                "quantity": 1,
                "currency_id": "BRL",
                "unit_price": float(total)
            }
        ],

        "payment_methods": {
            "excluded_payment_types": [
                {"id": "ticket"},   # Remove boleto
                {"id": "atm"}       # Remove débito em conta
            ],
            "installments": 1,
            "default_payment_method_id": "pix" if meio_pagamento == "pix" else "visa"
        },

        "back_urls": {
            "success": "https://www.seusite.com/success",
            "failure": "https://www.seusite.com/failure",
            "pending": "https://www.seusite.com/pending"
        },

        "auto_return": "approved"
    }

    preference_response = sdk.preference().create(preference_data)
    preference = preference_response["response"]

    return jsonify({
        "id": preference["id"],
        "init_point": preference["init_point"],
        "sandbox_init_point": preference["sandbox_init_point"]
    })


if __name__ == "__main__":
    app.run(debug=True)
