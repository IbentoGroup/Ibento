let mongoose = require('mongoose');
let dbURI = ""; //Need to set up a Mongo Database and put connection string here

try {
   
mongoose.connect(
    dbURI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(" Mongoose is connected")
	);
}
 catch (e) {
  console.log("could not connect");
}

if (process.env.NODE_ENV === 'production') {
  dbURI = process.env.MONGODB_URI;
}

mongoose.connection.on('error', err => {
  console.log('Mongoose connection error:', err);
});
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});


const gracefulShutdown = (msg, callback) => {
  mongoose.connection.close( () => {
    console.log(`Mongoose disconnected through ${msg}`);
    callback();
  });
}; 

// For nodemon restarts                                 
process.once('SIGUSR2', () => {
  gracefulShutdown('nodemon restart', () => {
    process.kill(process.pid, 'SIGUSR2');
  });
});
// For app termination
process.on('SIGINT', () => {
  gracefulShutdown('app termination', () => {
    process.exit(0);
  });
});
// For Heroku app termination
process.on('SIGTERM', () => {
  gracefulShutdown('Heroku app shutdown', () => {
    process.exit(0);
  });
});
/* incorporate db models with db */
require('./users');
require('./events');
require('./groups');