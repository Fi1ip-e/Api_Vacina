const { Router } = require("express");
const Pessoas = require("../models/Pessoas");
const express = require('express');
const app = express()

const router = Router();

//LISTAR
router.get('/listar', async (req, res) => {

    const pessoas = await Pessoas.findAll();
    res.status(200).json(pessoas);
});

//CREATE

router.post('/registrar', async (req, res) => {
// Verifica se exite cpf cadastrado
    Pessoas.findOne({ where: { cpf: req.body.cpf } }).then((pessoapcf) => {
        if (!pessoapcf) {
            // Verifica se exite local cadastrado
            Pessoas.findOne({ where: { local: req.body.local } }).then((pessoalocal) => {
                if (!pessoalocal) {

                    Pessoas.create(req.body)
                    res.json(
                        {
                            Messagem: "cadastrado e agendado",
                            dados: pessoapcf
                        })
                }
                else {
                    res.json("Esse local que você escolheu, não esta disponivel. Escolha outro!")
                }
            })
        }
        else {
            return res.json(
                {
                    Messagem: "Cpf ja cadastrado em nossa base. Veja o local do seu agendamento",
                    dados: pessoapcf
                })
        }
    })
});
//Atulizar local
router.put('/reagendar', async (req, res) => {

    
    Pessoas.findOne({ where: { local: req.body.local } }).then((pessoa) => {
        if (!pessoa && pessoa != "") {
            Pessoas.update(req.body, {where: {cpf: req.body.cpf}})

            res.json(
                {
                    Messagem: "Local atualizado",
                });
        }
        else {
            res.json('não foi possivel Agendar. Escolha um local não usado')
        }
    }).catch ((err) => {
        res.json(err)
    })
})

module.exports = router;