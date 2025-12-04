const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

router.post("/", (req, res) => {
  const appealData = {
    ...req.body,
    submitted_at: new Date().toISOString()
  };

  const filePath = path.join(__dirname, "../data/appeals.json");
  const appeals = JSON.parse(fs.readFileSync(filePath));
  appeals.push(appealData);

  fs.writeFileSync(filePath, JSON.stringify(appeals, null, 2));

  res.json({ success: true, appeal: appealData });
});

module.exports = router;
