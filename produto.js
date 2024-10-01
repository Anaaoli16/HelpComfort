document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const nome = urlParams.get('nome');
    const descricao = urlParams.get('descricao');
    const preco = urlParams.get('preco');
    const imagem = urlParams.get('imagem');

    document.getElementById('produto-nome').innerText = nome;
    document.getElementById('produto-descricao').innerText = descricao;
    document.getElementById('produto-preco').innerText = `R$${preco}`;
    document.getElementById('produto-imagem').src = imagem;

    document.getElementById('adicionar-carrinho').addEventListener('click', function() {
        adicionarAoCarrinho({ nome, descricao, preco, imagem });
    });
});

function adicionarAoCarrinho(produto) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.push(produto);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    alert('Produto adicionado ao carrinho!');
}