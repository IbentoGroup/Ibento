const mongoose = require('mongoose');

const eventsSchema = new mongoose.Schema({
    //
    //
    //
},{collection : 'events',versionKey : false});

mongoose.model('Event',eventsSchema);
