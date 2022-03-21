const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    //
    //
    //
},{collection : 'users',versionKey : false});

mongoose.model('User',userSchema);