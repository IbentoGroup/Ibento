const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
    //
    //
    //
},{collection : 'groups',versionKey : false});

mongoose.model('Group',groupSchema);

