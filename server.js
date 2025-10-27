/**
 * Express server for CoinGainCalc
 * - Serves static frontend from /public
 * - Uses process.env.PORT for Render compatibility
 * - Minimal security headers with helmet
 */

const express = require('express');
const path = require('path');
const helmet = require('helmet');

const app = express();
app.use(helmet());

// Serve static files from public
app.use(express.static(path.join(__dirname, 'public')));

// Health check
app.get('/healthz', (req, res) => res.json({status: 'ok'}));

// Fallback to index.html for SPA routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`CoinGainCalc server listening on port ${PORT}`);
});
