const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB Atlas'))
.catch(err => console.error('❌ MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send('Hello from Node + MongoDB Atlas!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
