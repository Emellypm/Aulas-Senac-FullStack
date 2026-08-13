const CHAVE_CARRINHO = "techstore_carrinho";

export function obterCarrinho() {
    const carrinho = localStorage.getItem(CHAVE_CARRINHO);

    return carrinho ? JSON.parse(carrinho) : [];
}

export function adicionarAoCarrinho(produto) {
    const carrinho = obterCarrinho();

    const produtoExistente = carrinho.find(
        item => item.id === produto.id
    );

    if (produtoExistente) {
        produtoExistente.quantidade += 1;
    } else {
        carrinho.push({
            ...produto,
            quantidade: 1
        });
    }

    localStorage.setItem(
        CHAVE_CARRINHO,
        JSON.stringify(carrinho)
    );
}

export function removerDoCarrinho(id) {
    const carrinho = obterCarrinho();

    const novoCarrinho = carrinho.filter(
        item => item.id !== id
    );

    localStorage.setItem(
        CHAVE_CARRINHO,
        JSON.stringify(novoCarrinho)
    );
}

export function alterarQuantidade(id, quantidade) {
    const carrinho = obterCarrinho();

    const produto = carrinho.find(
        item => item.id === id
    );

    if (!produto) return;

    if (quantidade <= 0) {
        removerDoCarrinho(id);
        return;
    }

    produto.quantidade = quantidade;

    localStorage.setItem(
        CHAVE_CARRINHO,
        JSON.stringify(carrinho)
    );
}