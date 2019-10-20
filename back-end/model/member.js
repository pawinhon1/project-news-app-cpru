var mongoose = require('mongoose');

var memberSchema = mongoose.Schema({
    username: String,
    password: String,
    firstname: String,
    lastname: String,
    tel: String,
    status: String
});

var memberModel = mongoose.model('member_news', memberSchema);

module.exports = memberModel;