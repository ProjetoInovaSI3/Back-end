const express = require("express")
const app = express()
const PORT = 8000
const fecth = require("node-fetch")
const conexao = require("./config/dbConn")
const demandaController = require("./controller/demandaController")

conexao.conexao;

app.use(express.json())
app.use(express.urlencoded(
    {
        extended: true
    })
)

app.post("/insereDemanda", demandaController.insereDemanda);

app.get("/listaDemanda", demandaController.listaDemanda)
app.delete("/removeDemanda/:cpf", demandaController.removeDemanda)
app.put("/atualizaDemanda/:cpf", demandaController.atualizaDemanda)
app.delete("/removeTodos", demandaController.removeTodos)
app.listen(PORT, () => {
    console.log(`Servidor executando na porta `, PORT);
});