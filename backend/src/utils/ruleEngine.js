function runRules(data) {
  const issues = [];

  const earnings = data.earnings || [];
  const ratings = data.ratings || [];
  const penalties = data.penalties || [];

  // check underpayment
  earnings.forEach((item) => {
    const expected =
      Number(item.base_pay) +
      Number(item.bonus) -
      Number(item.deductions);

    if (Number(item.final_payout) < expected) {
      issues.push({
        type: "Underpayment",
        severity: "High",
        message: `Underpayment on ${item.date}: expected ${expected}, got ${item.final_payout}`,
      });
    }
  });

  // check for rating drops
  for (let i = 1; i < ratings.length; i++) {
    let diff = ratings[i - 1].rating - ratings[i].rating;
    if (diff >= 1) {
      issues.push({
        type: "Rating Drop",
        severity: "Medium",
        message: `Rating dropped by ${diff.toFixed(1)} on ${ratings[i].date}`
      });
    }
  }

  // check for penalty without delivery
  penalties.forEach((p) => {
    const exists = earnings.some((e) => e.order_id == p.related_order);

    if (!exists) {
      issues.push({
        type: "Penalty Error",
        severity: "High",
        message: `Penalty on ${p.date} has NO matching order.`,
      });
    }
  });

  // check for missing bonuses
  const grouped = {};
  earnings.forEach((e) => {
    grouped[e.date] = grouped[e.date] || [];
    grouped[e.date].push(e);
  });

  Object.keys(grouped).forEach((date) => {
    const totalOrders = grouped[date].length;
    const bonusCount = grouped[date].reduce(
      (acc, row) => acc + Number(row.bonus),
      0
    );

    if (totalOrders >= 10 && bonusCount === 0) {
      issues.push({
        type: "Missing Bonus",
        severity: "Medium",
        message: `No bonus given on ${date} despite ${totalOrders} deliveries`,
      });
    }
  });

  // check for low pay for long distance
  earnings.forEach((item) => {
    if (item.distance_km > 5 && item.final_payout < 50) {
      issues.push({
        type: "Distance Pay Mismatch",
        severity: "Low",
        message: `Low payout (${item.final_payout}) for ${item.distance_km} km on ${item.date}`,
      });
    }
  });

  // check for high penalties
  penalties.forEach((p) => {
    if (p.amount > 100) {
      issues.push({
        type: "High Penalty",
        severity: "High",
        message: `Very high penalty (${p.amount}) on ${p.date}`,
      });
    }
  });

  return issues;
}

module.exports = { runRules };
