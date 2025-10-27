// ===== CoinGainCalc Node.js Server (Render-ready) =====
const express = require("express");
const path = require("path");
const app = express();

// Serve all static files (HTML, CSS, JS, images) from the root folder
app.use(express.static(path.join(__dirname)));

// Default route: serve index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Render automatically assigns a PORT (e.g., 10000)
const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT, () => {
  console.log(`✅ CoinGainCalc server running on port ${PORT}`);
});
