function calculateFairnessScore(issues) {
  if (flags.length === 0) return 100;

  let score = 100;

  flags.forEach((flag) => {
    if (flag.severity === "High") score -= 20;
    else if (flag.severity === "Medium") score -= 10;
    else if (flag.severity === "Low") score -= 5;
  });

  return Math.max(score, 0);
}

module.exports = { calculateFairnessScore };
