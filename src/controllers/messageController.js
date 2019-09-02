'use strict';

const MessageRepository = require('../repositories/MessageRepository');

var redis = require('redis');
var client = redis.createClient();

/*
exports.get = (req, res, next) => {
    MessageRepository.getAll()
        .then((message) => {
            res.status(200).send(message);
        }).catch(err => res.status(500).send(err))
};

*/

exports.get = (req, res, next) => {

    client.get('allmessages', function (err, reply) {
        if (reply) {
            console.log('redis');
            res.send(reply)
        } else {
            console.log('db');

            MessageRepository.getAll()
                .then((message) => {
                    client.set('allmessages', JSON.stringify(message));
                    client.expire('allmessages', 15);
                    res.status(200).send(message);
                }).catch(err => res.status(500).send(err))
        }
    });

};


exports.getById = (req, res, next) => {

    MessageRepository.getById(req.params.id)
        .then((message) => {
            res.status(200).send(message);
        }).catch(err => res.status(500).send(err))
};

exports.post = (req, res, next) => {
    const p = req.body;

    MessageRepository.create(p)
        .then((message) => {
            res.status(200).send(message);
        }).catch(err => res.status(500).send(err))
};


exports.getByConversationalId = (req, res, next) => {

    MessageRepository.getByConversationalId(req.params.id)
        .then((message) => {
            res.status(200).send(message);
        }).catch(err => res.status(500).send(err))
};