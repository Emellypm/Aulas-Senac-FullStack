const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const pessoaRouter = require("./router/pessoaRouter");

app.use("/pessoas",pessoaRouter);

const PORT = 3001;

app.listen(PORT,()=>{
console.log("--------------------------------");
console.log("Servidor iniciado");
console.log("http://localhost:3001");
console.log("--------------------------------");

});