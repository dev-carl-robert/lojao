const produtos = [
    {
        imagem: "produtos\\infantil 0.jpg",
        nome: "Conjunto Infantil",
        preco: "25.00",
        preco_cartao:"27.00",
        descricao: "Algodão ",
        identificador: "MI001"
    },
    {
        imagem: "produtos\\infantil 1.jpg",
        imagem1: "produtos\\infantil 1,1.jpg",
        nome: "Cueca Infantil",
        preco: "4.50",
        preco_cartao:"5.00",
        descricao: "personagem superman e homem aranha",
        identificador: "MI002"
    },
    {
        imagem: "produtos\\infantil 2.jpg",
        imagem1: "produtos\\infantil 2,1.jpg",
        imagem2: "produtos\\infantil 2,2.jpg",
        nome: "calcinha Infantil",
        preco: "4.50",
        preco_cartao:"5.00",
        descricao: "Algodão PMG/GG",
        identificador: "MI003"
    },
    {
        imagem: "produtos\\infantil 3.jpg",
        imagem1: "produtos\\infantil 3,1.jpg",
        nome: "Calcinha Infantil",
        preco: "6.50",
        preco_cartao:"7.00",
        descricao: "Algodão PMG/GG",
        identificador: "MI004"
    },
    {
        imagem: "produtos\\infantil 4.jpg",
        nome: "Vestido Infantil ",
        preco: "25.00",
        preco_cartao:"27.00",
        descricao: "PMG Não garantimos a mesma estampa em todos os tamanhos.",
        identificador: "MI005"
    },
    {
        imagem: "produtos\\infantil 5.jpg",
        nome: "Vestido Infantil",
        preco: "25.00",
        preco_cartao:"27.00",
        descricao: "TAM: PMG Não garantimos mesma estampa em todos os tamanhos.",
        identificador: "MI006"
    },
    {
        imagem: "produtos\\infantil 6.jpg",
        imagem1: "produtos\\infantil 6,1.jpg",
        nome: "top infantil",
        preco: "8.50",
        preco_cartao:"9.00",
        descricao: "TAM: PMG/GG",
        identificador: "MI007"
    },
    {
        imagem: "produtos\\infantil 7.jpg",
        nome: "Cueca Infantil",
        preco: "10.00",
        preco_cartao:"11.00",
        descricao: "TAM: PMG/GG",
        identificador: "MI008"
    },
    {
        imagem: "produtos\\infantil 8.jpg",
        nome: "Kit Meia Infantil",
        preco: "8.00",
        preco_cartao:"9.00",
        descricao: "",
        identificador: "MI009"
    },
    {
        imagem: "produtos\\infantil 9.jpg",
        imagem1: "produtos\\infantil 9,1.jpg",
        nome: "Kit Meia Infantil",
        preco: "16.50",
        preco_cartao:"18.00",
        descricao: "",
        identificador: "MI010"
    },
    {
        imagem: "produtos\\infantil 10.jpg",
        nome: "SHort Infantil",
        preco: "16.00",
        preco_cartao:"17.00",
        descricao: "1 a 8 anos",
        identificador: "MI011"
    },
    {
        imagem: "produtos\\infantil 11.jpg",
        imagem1: "produtos\\infantil 11,1.jpg",
        imagem2: "produtos\\infantil 11,2.jpg",
        imagem3: "produtos\\infantil 11,3.jpg",
        imagem4: "produtos\\infantil 11,4.jpg",
        imagem5: "produtos\\infantil 11,5.jpg",
        imagem6: "produtos\\infantil 11,6.jpg",
        imagem7: "produtos\\infantil 11,7.jpg",
        imagem8: "produtos\\infantil 11,8.jpg",
        imagem9: "produtos\\infantil 11,9.jpg",
        nome: "Vestido Infantil",
        preco: "25.00",
        preco_cartao:"27.00",
        descricao: "",
        identificador: "MI012"
    },
    {
        imagem: "produtos\\infantil 12.jpg",
        nome: "Bermuda Infantil",
        preco: "40.00",
        preco_cartao:"42.00",
        descricao: "",
        identificador: "MI013"
    },
    {
        imagem: "produtos\\infantil 13.jpg",
        imagem1: "produtos\\infantil 13,1.jpg",
        imagem2: "produtos\\infantil 13,2.jpg",
        nome: "Kit Calcinha Diamante (Infantil) ",
        preco: "130.00",
        preco_cartao:"120",
        descricao: "kit com 7 peças PMG/GG",
        identificador: "MI014"
    },
    {
        imagem: "produtos\\infantil 14.jpg",
        imagem1: "produtos\\infantil 14,1.jpg",
        imagem2: "produtos\\infantil 14,2.jpg",
        imagem3: "produtos\\infantil 14,3.jpg",
        imagem4: "produtos\\infantil 14,4.jpg",
        imagem5: "produtos\\infantil 14,5.jpg",
        nome: "Baby Doll Infantil",
        preco: "25.00",
        preco_cartao:"27.00",
        descricao: "tamanho P ao EX; Não tem no atacado",
        identificador: "MI015"
    },
    {
        imagem: "produtos\\infantil 15.jpg",
        imagem1: "produtos\\infantil 15,1.jpg",
        nome: "Conjunto Juvenil",
        preco: "16.00",
        preco_cartao:"17.00",
        descricao: "PMG/GG",
        identificador: "MI015"
    }
];

const container = document.querySelector(".produtos");
const modelo = container.querySelector(".produto");

// Remove o produto de exemplo do HTML depois de clonar
container.innerHTML = "";

produtos.forEach(prod => {
    const clone = modelo.cloneNode(true);
    clone.querySelector(".imagem").src = prod.imagem;
    clone.querySelector(".imagem").alt = prod.nome;
    clone.querySelector(".nome_produto").textContent = prod.nome;
    clone.querySelector(".preco").textContent = `R$${prod.preco}`;
    clone.querySelector(".descricao").textContent = prod.descricao;

    container.appendChild(clone);
});