const express = require('express');
const app = express();
const port = 3000;

// Route to respond with "Hello World"
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(80);
