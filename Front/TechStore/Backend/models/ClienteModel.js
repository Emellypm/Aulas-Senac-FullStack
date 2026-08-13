const conexao = require("../config/db");

exports.listar = (callback) => {
    const sql = "SELECT * FROM clientes";

    conexao.query(sql, callback);
};

exports.buscar = (id, callback) => {
    const sql = "SELECT * FROM clientes WHERE id = ?";

    conexao.query(sql, [id], callback);
};

exports.inserir = (cliente, callback) => {
    const sql = `
        INSERT INTO clientes (nome, email, telefone)
        VALUES (?, ?, ?)
    `;

    conexao.query(
        sql,
        [cliente.nome, cliente.email, cliente.telefone],
        callback
    );
};

exports.alterar = (id, cliente, callback) => {
    const sql = `
        UPDATE clientes
        SET nome = ?, email = ?, telefone = ?
        WHERE id = ?
    `;

    conexao.query(
        sql,
        [cliente.nome, cliente.email, cliente.telefone, id],
        callback
    );
};

exports.excluir = (id, callback) => {
    const sql = "DELETE FROM clientes WHERE id = ?";

    conexao.query(sql, [id], callback);
};