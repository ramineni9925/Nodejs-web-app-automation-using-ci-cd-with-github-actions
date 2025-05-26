const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("CI/CD Node App Working!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
