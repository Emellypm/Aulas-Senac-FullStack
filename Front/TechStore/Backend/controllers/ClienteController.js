const ClienteModel = require("../models/ClienteModel");

exports.listar = (req, res) => {
    ClienteModel.listar((erro, resultado) => {
        if (erro) {
            return res.status(500).json({
                erro: "Erro ao listar clientes"
            });
        }

        res.json(resultado);
    });
};

exports.buscar = (req, res) => {
    const id = req.params.id;

    ClienteModel.buscar(id, (erro, resultado) => {
        if (erro) {
            return res.status(500).json({
                erro: "Erro ao buscar cliente"
            });
        }

        if (resultado.length === 0) {
            return res.status(404).json({
                mensagem: "Cliente não encontrado"
            });
        }

        res.json(resultado[0]);
    });
};

exports.inserir = (req, res) => {
    ClienteModel.inserir(req.body, (erro, resultado) => {
        if (erro) {
            return res.status(500).json({
                erro: "Erro ao inserir cliente"
            });
        }

        res.status(201).json({
            mensagem: "Cliente cadastrado com sucesso",
            id: resultado.insertId
        });
    });
};

exports.alterar = (req, res) => {
    const id = req.params.id;

    ClienteModel.alterar(id, req.body, (erro, resultado) => {
        if (erro) {
            return res.status(500).json({
                erro: "Erro ao alterar cliente"
            });
        }

        res.json({
            mensagem: "Cliente alterado com sucesso"
        });
    });
};

exports.excluir = (req, res) => {
    const id = req.params.id;

    ClienteModel.excluir(id, (erro, resultado) => {
        if (erro) {
            return res.status(500).json({
                erro: "Erro ao excluir cliente"
            });
        }

        res.json({
            mensagem: "Cliente excluído com sucesso"
        });
    });
};