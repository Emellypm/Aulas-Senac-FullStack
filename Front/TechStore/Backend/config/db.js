const mysql = require("mysql2");

const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "techstore_db"
});

conexao.connect((erro) => {
    if (erro) {
        console.error("Erro ao conectar com o banco:", erro);
        return;
    }

    console.log("Banco conectado com sucesso!");
});

module.exports = conexao;