const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head><title>StatusBoard</title></head>
      <body style="font-family: sans-serif;">
        <h1>StatusBoard</h1>
        <p>The app is running successfully inside Docker.</p>
        <p>Try visiting <a href="/health">/health</a> for the health check.</p>
      </body>
    </html>
  `);
});

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    service: "statusboard",
    uptime: process.uptime(),
  });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`StatusBoard is running on port ${port}`);
});
