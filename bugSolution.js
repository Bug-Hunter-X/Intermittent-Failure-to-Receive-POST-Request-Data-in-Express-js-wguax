const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json()); // Add body-parser for robustness
app.use(express.json()); // Use express.json() as well

app.post('/data', (req, res) => {
  console.log('Received:', req.body);
  res.send('Data received');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});