const ProdutoModel = require("../models/ProdutoModel");

exports.listar = (req, res) => {
    ProdutoModel.listar((erro, resultado) => {
        if (erro) {
            return res.status(500).json({
                erro: "Erro ao listar produtos"
            });
        }

        res.json(resultado);
    });
};

exports.buscar = (req, res) => {
    const id = req.params.id;

    ProdutoModel.buscar(id, (erro, resultado) => {
        if (erro) {
            return res.status(500).json({
                erro: "Erro ao buscar produto"
            });
        }

        if (resultado.length === 0) {
            return res.status(404).json({
                mensagem: "Produto não encontrado"
            });
        }

        res.json(resultado[0]);
    });
};

exports.inserir = (req, res) => {
    ProdutoModel.inserir(req.body, (erro, resultado) => {
        if (erro) {
            return res.status(500).json({
                erro: "Erro ao inserir produto"
            });
        }

        res.status(201).json({
            mensagem: "Produto cadastrado com sucesso",
            id: resultado.insertId
        });
    });
};

exports.alterar = (req, res) => {
    const id = req.params.id;

    ProdutoModel.alterar(id, req.body, (erro, resultado) => {
        if (erro) {
            return res.status(500).json({
                erro: "Erro ao alterar produto"
            });
        }

        res.json({
            mensagem: "Produto alterado com sucesso"
        });
    });
};

exports.excluir = (req, res) => {
    const id = req.params.id;

    ProdutoModel.excluir(id, (erro, resultado) => {
        if (erro) {
            return res.status(500).json({
                erro: "Erro ao excluir produto"
            });
        }

        res.json({
            mensagem: "Produto excluído com sucesso"
        });
    });
};