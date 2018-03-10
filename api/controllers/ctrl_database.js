const mongoose = require('mongoose');

module.exports.connect_to_the_database = () => {
  mongoose.connect('mongodb://Ogamiq:kzwPower123@ds046677.mlab.com:46677/kzwdb');
  mongoose.connection.once('open', function() {
    console.log('Database connected');
  }).on('error', function(error) {
    console.log('Connection error:', error);
  });
};
