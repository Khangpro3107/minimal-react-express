const express = require("express");
const app = express();

app.get("/get", (req, res) => {
  res.json({msg: "Hello"})
})

app.listen(3001, () => console.log("Server on port 3001..."))