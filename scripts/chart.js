const ctx = document.getElementById("myLineChart").getContext("2d");
const myLineChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "WPPOOL",
        data: [3.3, 4.3, 70.3, 30.3, 70.3, 60.3, 95.3],
        fill: false,
        borderColor: "#FC714D",
        backgroundColor: "#FC714D",
        tension: 0.1,
      },
      {
        label: "Google",
        data: [3.3, 40.3, 10.3, 40.3, 70.3, 80.3, 70.3],
        fill: false,
        borderColor: "#615DE3",
        backgroundColor: "#615DE3",
        tension: 0.1,
      },
      {
        label: "Microsoft",
        data: [3.3, 20.3, 40.3, 70.3, 40.3, 80.3, 90.3],
        fill: false,
        borderColor: "#AFCD80",
        backgroundColor: "#AFCD80",
        tension: 0.1,
      },
      {
        label: "Twitter Index",
        data: [0.2, 20.2, 30.2, 40.2, 90.2, 90.2, 100],
        fill: false,
        borderColor: "#6F34A1",
        backgroundColor: "#6F34A1",
        tension: 0.1,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
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
          labelColor: function (context) {
            return {
              borderColor: context.dataset.borderColor,
              backgroundColor: context.dataset.backgroundColor,
              borderWidth: 2,
              borderRadius: 0,
              padding: 5,
            };
          },
        },
      },
    },
    hover: {
      mode: "index",
      intersect: false,
      animationDuration: 0,
    },
    animation: {
      duration: 0,
    },
  },
});
