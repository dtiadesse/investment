<template>
  <div class="chart-container">
    <canvas ref="canvas" class="chart"></canvas>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";

// Props for the chart
const props = defineProps({
  labels: {
    type: Array,
    required: true,
  },
  preSynergyData: {
    type: Array,
    required: true,
  },
  postSynergyData: {
    type: Array,
    required: true,
  },
  chartWidth: {
    type: Number,
    default: 600,
  },
  chartHeight: {
    type: Number,
    default: 400,
  },
  barHeight: {
    type: Number,
    default: 20, // Height of each bar
  },
  barSpacing: {
    type: Number,
    default: 20, // Space between horizontal bars
  },
  valueScaleSteps: {
    type: Number,
    default: 5, // Number of intervals (steps) for value differences
  },
});

const canvas = ref(null);

const drawChart = () => {
  if (!canvas.value) return;

  const ctx = canvas.value.getContext("2d");
  const {
    labels,
    preSynergyData,
    postSynergyData,
    chartWidth,
    chartHeight,
    barHeight,
    barSpacing,
    valueScaleSteps,
  } = props;

  // Set canvas size
  canvas.value.width = chartWidth;
  canvas.value.height = chartHeight;

  // Chart variables
  const padding = 53; // Padding around the chart
  const barColors = ["#00A8E8", "#2C2F48"];
  const maxDataValue = Math.max(...preSynergyData, ...postSynergyData);
  const chartAreaWidth = chartWidth - padding * 2;
  const chartAreaHeight = chartHeight - padding * 2;
  const numBars = labels.length;
  const totalBarHeight = barHeight + barSpacing; // Combined height of a bar and its spacing

  // Clear canvas
  ctx.clearRect(0, 0, chartWidth, chartHeight);

  // Draw axes
  ctx.strokeStyle = "#ddd";
  ctx.beginPath();
  ctx.moveTo(padding, padding);
  ctx.lineTo(padding, chartHeight - padding); // Y-axis
  //ctx.lineTo(chartWidth - padding, chartHeight - padding); // X-axis
  ctx.stroke();

  // Draw grid lines and values for the X-axis
  ctx.strokeStyle = "#ddd";
  ctx.textAlign = "center";
  ctx.fillStyle = "#000";

  for (let i = 0; i <= valueScaleSteps; i++) {
    const x = padding + (chartAreaWidth / valueScaleSteps) * i;
    const value = (maxDataValue * i) / valueScaleSteps;

    // Draw grid lines
    ctx.beginPath();
    ctx.moveTo(x, chartHeight - padding);
    ctx.lineTo(x, padding);
    ctx.stroke();

    // Draw value labels on the X-axis
    ctx.fillStyle = "white";
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText(value.toFixed(1), x + 7, chartHeight - padding + 20);
  }

  // Function to truncate or wrap long labels
  const drawLabel = (ctx, text, x, y, maxWidth, lineHeight) => {
      const words = text.split(" ");
      let line = "";
      let lines = [];

      // Break text into lines
      words.forEach((word) => {
        const testLine = line + word + " ";
        const testWidth = ctx.measureText(testLine).width;

        if (testWidth > maxWidth) {
          lines.push(line);
          line = word + " ";
        } else {
          line = testLine;
        }
      });
      lines.push(line);

      // Draw each line
      lines.forEach((line, index) => {
        ctx.fillStyle = "#fff";
        ctx.font = "12px Arial";
        ctx.textAlign = "center";
        ctx.fillText(line.trim(), x, y + index * lineHeight);
      });

  };

  // Draw horizontal bars
  labels.forEach((label, index) => {
    const y = padding + index * totalBarHeight;

    // Pre-Synergy Bar
    const preBarWidth = (preSynergyData[index] / maxDataValue) * chartAreaWidth;
    ctx.fillStyle = barColors[0];
    ctx.fillRect(padding, y, preBarWidth, barHeight);

    // Post-Synergy Bar
    const postBarWidth = (postSynergyData[index] / maxDataValue) * chartAreaWidth;

    // Draw the label (wrap if too long)
     drawLabel(ctx, label, padding - 28, y + barHeight / 3.5 - 7, padding - 30, 14);


    ctx.fillStyle = barColors[1];
    ctx.fillRect(
      padding + preBarWidth,
      y,
      postBarWidth,
      barHeight
    );

    // Draw labels for the bar groups
   // ctx.fillStyle = "#000";
    //ctx.textAlign = "center";
    //ctx.fillText(label, padding - 25, y + barHeight / 1.5);
  });
};

onMounted(() => {
  drawChart();
});

// Redraw chart if data changes
watch(
  () => [
    props.labels,
    props.preSynergyData,
    props.postSynergyData,
    props.valueScaleSteps,
    props.barSpacing,
  ],
  drawChart
);
</script>

<style scoped>
.chart-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
}

.chart {
  display: block;
  margin-top: 24px;
}
</style>
