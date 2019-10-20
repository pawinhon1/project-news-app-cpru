var mongoose = require('mongoose');

var newsSchema = mongoose.Schema({
    caption: String,
    describtion: String,
    type: String,
    image: String,
    member_id: String,
    status: { type: String, default: 'not' }
});

var newsModel = mongoose.model('news', newsSchema);

module.exports = newsModel;