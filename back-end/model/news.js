var mongoose = require('mongoose');

var newsSchema = mongoose.Schema({
    caption: String,
    describtion: String,
    type: String,
    image: String,
    firstname: String,
    lastname: String
});

var newsModel = mongoose.model('news', newsSchema);

module.exports = newsModel;