const express = require("express");
const { runRules } = require("../utils/ruleEngine");
const { calculateFairnessScore } = require("../utils/fairnessScore");

const router = express.Router();

router.post("/", (req, res) => {
  const data = req.body;

  const flags = runRules(data);
  const score = calculateFairnessScore(flags);

  res.json({
    success: true,
    fairnessScore: score,
    issues: flags
  });
});

module.exports = router;
