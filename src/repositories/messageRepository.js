'use strict';
var Message = require('../config/dbMessage');

module.exports = new class MessageRepository {

    getAll() {
        return Message.find();
    }

    getById(id) {
        try {
            return Message.findById(id);
        } catch (error) {
            console.log(error);
        }
       
    }

    create(message) {
        return Message.create(message);
    }

    getByConversationalId(id){
        var query = {conversationId: id};
        //console(Message.find(query));
        return Message.find(query);
    }
}