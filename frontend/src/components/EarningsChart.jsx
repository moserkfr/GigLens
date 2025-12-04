import { Line } from "react-chartjs-2";
import { Chart, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
Chart.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function EarningsChart({ data = [] }) {
  const labels = data.map(d => d.date);
  const values = data.map(d => Number(d.final_payout || d.final_payout || 0));

  const chartData = {
    labels,
    datasets: [
      { label: "Payout", data: values, fill: false, tension: 0.2 }
    ]
  };

  return (
    <div style={{ width: 520 }}>
      <h4 style={{ margin: "6px 0" }}>Earnings</h4>
      <Line data={chartData} />
    </div>
  );
}
