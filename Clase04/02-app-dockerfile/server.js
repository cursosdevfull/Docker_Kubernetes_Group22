const http = require("http");
const helmet = require("helmet");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(helmet());
app.use(cors());

app.get("/", (req, res) => {
  res.send("server is up");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
