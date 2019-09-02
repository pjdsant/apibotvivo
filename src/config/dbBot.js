var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/db_bots');

var Schema = mongoose.Schema;

var botSchema = new Schema({
    id: String,
    name: String,
});


var Bot = mongoose.model('Bot', botSchema);
module.exports = Bot;