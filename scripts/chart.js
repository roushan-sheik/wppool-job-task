const ctx = document.getElementById("myLineChart").getContext("2d");
const myLineChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "WPPOOL",
        data: [3.3, 4.3, 70.3, 30.3, 70.3, 80.3, 90.3],
        fill: false,
        borderColor: "#FC714D",
        tension: 0.1,
      },
      {
        label: "Google",
        data: [3.3, 40.3, 10.3, 40.3, 70.3, 80.3, 70.3],
        fill: false,
        borderColor: "#615DE3",
        tension: 0.1,
      },
      {
        label: "Microsoft",
        data: [3.3, 20.3, 40.3, 70.3, 40.3, 80.3, 90.3],
        fill: false,
        borderColor: "#AFCD80",
        tension: 0.1,
      },
      {
        label: "Twitter Index",
        data: [0.2, 20.2, 30.2, 40.2, 90.2, 90.2, 90.2],
        fill: false,
        borderColor: "#6F34A1",
        tension: 0.1,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: "Month",
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: "Percentage",
        },
        ticks: {
          callback: function (value) {
            return value + "%";
          },
        },
      },
    },
    plugins: {
      tooltip: {
        enabled: true,
        mode: "index",
        intersect: false,
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y + "%";
            }
            return label;
          },
        },
      },
    },
    hover: {
      mode: "index",
      intersect: false,
    },
  },
});
