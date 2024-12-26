const express = require('express');
const app = express();

const RESPONSE = process.env.RESPONSE || 'dunia';

app.get('/', (req, res) => {
  res.send(RESPONSE);
});

const PORT = 80;
app.listen(PORT, () => {
  console.log(`App B listening on port ${PORT}`);
});
