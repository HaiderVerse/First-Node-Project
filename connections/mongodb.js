const mongoose = require('mongoose');

function connectMongoDB(port){
    return mongoose.connect(port);
}

module.exports = connectMongoDB;