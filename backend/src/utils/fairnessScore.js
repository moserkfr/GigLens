function calculateFairnessScore(issues) {
  if (issues.length === 0) return 100;

  let score = 100;

  issues.forEach((issue) => {
    if (issue.severity === "High") score -= 10;
    else if (issue.severity === "Medium") score -= 7;
    else if (issue.severity === "Low") score -= 5;
  });

  return Math.max(score, 0);
}

module.exports = { calculateFairnessScore };
