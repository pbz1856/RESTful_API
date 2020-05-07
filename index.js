const express = require("express");
const app = express();
const rootRouter = require('./routers/root');
const genresRouter = require('./routers/genres');

app.use(rootRouter);
app.use(genresRouter);

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`Listening port ${port}...`);
});

// TODO

// 1. Think about the data set I will be using for my API endpoint
// 2. Validator
// 3. Error handling - middleware, winston, etc.
// 4. Connecting to MongoDB
//