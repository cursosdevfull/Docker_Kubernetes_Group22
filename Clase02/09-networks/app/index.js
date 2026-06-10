const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

server.on('error', (err) => {
  console.error('Server failed to start:', err.message);
  process.exit(1);
});
