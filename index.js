const express = require("express");
const app = express();

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`Listening port ${port}...`);
});

app.get('/', (req, res, next) => {
  res.send('Welcome to the API endpont');
});

app.get('/api/genres', (req, res, next) => {

  res.send('This is Genres');
});

// TODO

// 1. Think about the data set I will be using for my API endpoint
// 2. Validator
// 3. Error handling - middleware, winston, etc.
// 4. Connecting to MongoDB
//