const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 8888;

const SECRET = "super-secret"; // to be replaced with secret in .env var / privateKey

app.get("/api/user", (req, res) => {
  console.log("req.query.jwt", req.query.jwt);
  jwt.verify(req.query.jwt, SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        error: err,
      });
    }
    return res.json({
      message: "Welcome!",
      payload: decoded,
    });
  });
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}...`);
});
