const express = require("express");
const cors = require("cors");

const clientesRoutes = require("./routes/clientes");
const produtosRoutes = require("./routes/produtos");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        mensagem: "API funcionando!"
    });
});

app.use("/clientes", clientesRoutes);
app.use("/produtos", produtosRoutes);

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});