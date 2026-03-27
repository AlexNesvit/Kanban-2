const express = require("express");
const cors = require("cors");
const tacheRoutes = require("./routes/tacheRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(tacheRoutes);

app.get("/health", (_req, res) => {
  res.json({ status: "UP" });
});

module.exports = app;
