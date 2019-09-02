'use strict';
var mongoose = require('mongoose')
var Bot = require('../config/dbBot');


module.exports = new class BotRepository {

    getAll() {
        return Bot.find();
    }

    getById(id) {
        return Bot.findById(id);
    }

    create(bot) {
        return Bot.create(bot);
    }

    update(id, bot) {

        const updatedbot = {
            name: bot.name,
        }

        return Bot.findByIdAndUpdate(id, updatedbot, { new: true });
    }

    delete(id) {
        return Bot.findByIdAndRemove(id);
    }

}