const mongoose = require('mongoose');

// Replace the URI below with your own MongoDB Atlas cluster URI
// const uri = 'mongodb+srv://venom:venomvenom@<cluster-url>/<database-name>?retryWrites=true&w=majority';
const uri = 'mongodb+srv://venom:venomvenom@cluster0.khhq5b4.mongodb.net/?retryWrites=true&w=majority'

// Connect to the MongoDB Atlas cluster using Mongoose
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(error => console.error('Error connecting to MongoDB Atlas:', error));