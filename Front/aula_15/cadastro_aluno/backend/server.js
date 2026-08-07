require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

//TESTE DA API

app.get("/", (req, res) => {
    res.send("API Cadastro de Alunos funcionando!")
});

//ROTAS
const alunoRouter = require("./router/alunos");
app.use("/api/alunos", alunoRouter);

app.listen(process.env.PORT, () => {
    console.log("--------------------------------");
    console.log("Servidor iniciado com sucesso");
    console.log("http://localhost:" + process.env.PORT);
    console.log("--------------------------------");
});