const express = require("express")
const app = express()
const PORT = 8000
const fecth = require("node-fetch")
const conexao = require("./config/dbConn")
const enderecoController = require("./controller/enderecoController")
const pessoaController = require("./controller/pessoaController")
conexao.conexao;

app.use(express.json())
app.use(express.urlencoded(
    {
        extended: true
    })
)
app.post("/inserePessoa", pessoaController.inserePessoa);
app.get("/pesquisaCEP/:cep", enderecoController.recuperaEnderecoCEP)
app.get("/listaPessoas", pessoaController.recuperaPessoa)
app.put("/atualizaPessoa/:id", pessoaController.atualizaPessoa)
app.post("/insereEndereco", enderecoController.insereEndereco);


app.listen(PORT, () => {
    console.log(`Servidor executando na porta `, PORT);
});