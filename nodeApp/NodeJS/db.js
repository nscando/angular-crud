

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/appNode', {
     useNewUrlParser: true,
     useUnifiedTopology: true,
     useCreateIndex: true
}, function (error) {
     if (error) {
          throw error;
     } else {
          console.log('MongoDB connection succeeded.');
     }
});
module.exports = mongoose; 