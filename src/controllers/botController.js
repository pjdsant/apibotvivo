'use strict';

const BotRepository = require('../repositories/botRepository');

exports.get = (req, res, next) => {
    BotRepository.getAll()
        .then((bot) => {
            res.status(200).send(bot);
        }).catch(err => res.status(500).send(err))
};

exports.getById = (req, res, next) => {

    BotRepository.getById(req.params.id)
        .then((bot) => {
            res.status(200).send(bot);
        }).catch(err => res.status(500).send(err))
};

exports.post = (req, res, next) => {
    const p = req.body;

    BotRepository.create(p)
        .then((bot) => {
            res.status(200).send(bot);
        }).catch(err => res.status(500).send(err))
};

exports.put = (req, res, next) => {
    const p = req.body;

    BotRepository.update(req.params.id, p)
        .then((bot) => {
            res.status(201).send(bot);
        }).catch(err => res.status(500).send(err))
};

exports.delete = (req, res, next) => {
    BotRepository.delete(req.params.id)
        .then((bot) => {
            res.status(200).send('Bot deletado com Sucesso!');
        }).catch(err => console.error.bind(console, `Error ${err}`))
};