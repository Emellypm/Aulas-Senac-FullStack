const conexao = require("../config/db");

exports.listar = (callback) => {
    const sql = "SELECT * FROM produtos";

    conexao.query(sql, callback);
};

exports.buscar = (id, callback) => {
    const sql = "SELECT * FROM produtos WHERE id = ?";

    conexao.query(sql, [id], callback);
};

exports.inserir = (produto, callback) => {
    const sql = `
        INSERT INTO produtos (nome, preco, estoque, imagem)
        VALUES (?, ?, ?, ?)
    `;

    conexao.query(
        sql,
        [
            produto.nome,
            produto.preco,
            produto.estoque,
            produto.imagem
        ],
        callback
    );
};

exports.alterar = (id, produto, callback) => {
    const sql = `
        UPDATE produtos
        SET nome = ?, preco = ?, estoque = ?, imagem = ?
        WHERE id = ?
    `;

    conexao.query(
        sql,
        [
            produto.nome,
            produto.preco,
            produto.estoque,
            produto.imagem,
            id
        ],
        callback
    );
};

exports.excluir = (id, callback) => {
    const sql = "DELETE FROM produtos WHERE id = ?";

    conexao.query(sql, [id], callback);
};