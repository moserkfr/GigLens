const express = require("express");
const { runRules } = require("../utils/ruleEngine");
const { calculateFairnessScore } = require("../utils/fairnessScore");

const router = express.Router();

router.post("/", (req, res) => {
  const data = req.body;

  const issues = runRules(data);
  const score = calculateFairnessScore(issues);

  res.json({
    success: true,
    fairnessScore: score,
    issues: issues
  });
});

module.exports = router;
