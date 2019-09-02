var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/db_messages');

var Schema = mongoose.Schema;

var messageSchema = new Schema({
    conversationId: String,
    timestamp: Date,
    from: String,
    to: String,
    text: String
});

var Message = mongoose.model('Message', messageSchema);
module.exports = Message;