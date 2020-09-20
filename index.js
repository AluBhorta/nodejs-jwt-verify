const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require('cors')
 
const app = express();
const PORT = 8888;

const SECRET = "super-secret"; // to be replaced with secret in .env var / privateKey

app.use(cors());


app.get("/api/user", (req, res) => {
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
