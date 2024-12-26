const express = require("express");
const app = express();

const RESPONSE = process.env.RESPONSE || "halo";

app.get("/", (req, res) => {
  res.send(RESPONSE);
});

const PORT = 80;
app.listen(PORT, () => {
  console.log(`App A listening on port ${PORT}`);
});
