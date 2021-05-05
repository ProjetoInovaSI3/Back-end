const db = require("../config/dbConn");
const Demanda = db.demanda

exports.insereDemanda = (req, res) => {

    if (!req.body.cpf) {
        res.status(500).send({ msg: "O campo cpf deve ser preenchido." })
        return
    } else {
        if (!req.body.nome) {
            res.status(500).send({ msg: "O campo nome deve ser preenchido." })
            return
        } else {
            if (!req.body.demanda) {
                res.status(500).send({ msg: "O campo demanda deve ser preenchido." })
                return
            } else {
                if (!req.body.numero) {
                    res.status(500).send({ msg: "O campo numero deve ser preenchido." })
                    return
                } else {
                    if (!req.body.email) {
                        res.status(500).send({ msg: "O campo email deve ser preenchido." })
                        return
                    }
                }
            }
        }
    }

    const demanda = {

        CPF: req.body.cpf,
        NOME: req.body.nome,
        DEMANDA: req.body.demanda,
        NUMERO: req.body.numero,
        EMAIL: req.body.email,

    }

    Demanda.create(demanda)
        .then(data => { res.status(200).send(data) })
        .catch(err => { res.status(500).send(err) })
}

exports.listaDemanda = (req, res) => {

    const condicao = req.query.cpf ? { CPF: req.query.cpf } : null

    Demanda.findAll({ where: condicao })
        .then(data => { res.status(200).send(data) })
        .catch(err => { res.status(500).send(err) })
}
exports.removeDemanda = (req, res) => {

    Demanda.destroy({ where: { CPF: req.params.cpf } })
        .then(ret => {
            if (ret > 0) {
                res.status(200).send({ msg: "o Pokemon foi removido com sucesso!" })
            } else {
                res.status(200).send({ msg: "Pokemon não encontrado!" })

            }
        })
        .catch(err => { res.status(500).send(err) })

}
exports.atualizaDemanda = (req, res) => {

    Demanda.update(req.body, { where: { CPF: req.params.cpf } })
        .then(ret => {
            if (ret > 0) {
                res.status(200).send({ msg: "o Pokemon foi atualizado com sucesso!" })
            } else {
                res.status(200).send({ msg: "Pokemon não encontrado!" })

            }
        })
        .catch(err => { res.status(500).send(err) })

}
exports.removeTodos = (req, res) => {

    Demanda.destroy({ where: {}, truncate: false })
        .then(ret => {
            if (ret > 0) {
                res.status(200).send({ msg: "Todos Pokemons removidos" })
            } else {
                res.status(200).send({ msg: "Pokemon não encontrado!" })

            }
        })
        .catch(err => { res.status(500).send(err) })

}