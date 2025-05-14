function carregarCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    const containerCarrinho = document.querySelector(".produtos-carrinho");
    containerCarrinho.innerHTML = ""; // Limpa o carrinho antes de adicionar os itens

    if (carrinho.length === 0) {
        containerCarrinho.innerHTML = "<p>O carrinho está vazio.</p>";
        return;
    }

    let total = 0;

    // Exibe os produtos no carrinho
    carrinho.forEach(item => {
        const divProduto = document.createElement("div");
        divProduto.classList.add("produto-carrinho");

        divProduto.innerHTML = `
            <img class="imagem" src="${item.imagem}" alt="${item.nome}">
            <h3 class="nome_produto">${item.nome}</h3>
            <p class="quantidade">Quantidade: ${item.quantidade}</p>
            <p class="preco">Preço unitário: R$ ${item.preco}</p>
            <p class="preco-total">Total: R$ ${(parseFloat(item.preco) * item.quantidade).toFixed(2)}</p>
        `;

        containerCarrinho.appendChild(divProduto);
        total += parseFloat(item.preco) * item.quantidade;
    });

    // Exibe o total do carrinho
    const totalElement = document.querySelector("#total");
    totalElement.textContent = `R$ ${total.toFixed(2)}`;
}

document.addEventListener("DOMContentLoaded", carregarCarrinho);
