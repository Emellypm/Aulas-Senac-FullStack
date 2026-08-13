const express = require("express");

const router = express.Router();

const ProdutoController = require("../controllers/ProdutoController");

router.get("/", ProdutoController.listar);

router.get("/:id", ProdutoController.buscar);

router.post("/", ProdutoController.inserir);

router.put("/:id", ProdutoController.alterar);

router.delete("/:id", ProdutoController.excluir);

module.exports = router;