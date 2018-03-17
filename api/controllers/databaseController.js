const CONFIG = require("../data/config");
const mongoose = require('mongoose');

module.exports.connectWithTheDatabase = () => {
  mongoose.connect(CONFIG.DB_URL);
  mongoose.connection.once('open', function() {
    console.log('Database connected');
  }).on('error', function(error) {
    console.log('Connection error:', error);
  });
};
