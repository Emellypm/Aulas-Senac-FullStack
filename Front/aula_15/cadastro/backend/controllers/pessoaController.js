const conexao = require("../database/conexao");
//Listar

exports.listar = (req, res) => {
    const sql = "SELECT* FROM pessoas ORDER BY id";

    conexao.query(sql, (erro, resultado) => {
        if (erro) {
            return res.status(500).json(erro);
        }
        res.status(200).json(resultado);
    });
};

//inserir
exports.inserir = (req, res) => {
    const { nome } = req.body;

    if (!nome) {
        return res.status(400).json({
            mensagem: "informe o nome."
        });
    }
    const sql = "INSERT INTO pessoas (nome) VALUES (?)";

    conexao.query(sql, [nome], (erro) => {
        if (erro) {
            return res.status(500).json(erro);
        }
        res.status(201).json({
            mensagem: "Pessoa cadastrada com sucesso!"
        });
    });
};

//excluir

exports.excluir = (req, res) => {
    const {id} = req.params;
    const sql = "DELETE FROM pessoas WHERE id = ?";
    conexao.query(sql,[id],(erro)=>{
        if(erro){
            return res.status(500).json(erro);
        }
        res.json({
            mensagem:"Pessoa excluida com sucesso!"
        });
    });
};