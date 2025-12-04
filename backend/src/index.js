const express = require("express");
const cors = require("cors");

const uploadRoutes = require("./routes/upload");
const auditRoutes = require("./routes/audit");
const appealRoutes = require("./routes/appeal");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/upload", uploadRoutes);
app.use("/audit", auditRoutes);
app.use("/appeal", appealRoutes);

app.listen(5000, () => {
  console.log("Backend working on http://localhost:5000");
});
