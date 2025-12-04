import { Line } from "react-chartjs-2";

export default function RatingsChart({ data = [] }) {
  const labels = data.map(d => d.date);
  const values = data.map(d => Number(d.rating || 0));

  const chartData = {
    labels,
    datasets: [
      { label: "Rating", data: values, fill: false, tension: 0.2 }
    ]
  };

  return (
    <div style={{ width: 520 }}>
      <h4 style={{ margin: "6px 0" }}>Ratings</h4>
      <Line data={chartData} />
    </div>
  );
}
