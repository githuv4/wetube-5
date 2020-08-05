const express = require("express");
const app = express();

const PORT = 4000;

app.get("/", function (req, res) {
  res.send("Home");
});

function handleListen() {
  console.log(`✅ Listening on: http://localhost:${PORT}`);
}
app.listen(PORT, handleListen);
