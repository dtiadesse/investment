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
  const padding = 50; // Padding around the chart
  const barColors = ["#00A8E8", "#2C2F48"];
  const maxDataValue = Math.max(...preSynergyData, ...postSynergyData);
  const chartAreaWidth = chartWidth - padding * 2;
  const chartAreaHeight = chartHeight - padding * 2;
  const numBars = labels.length;
  const totalBarHeight = barHeight + barSpacing; // Combined height of a bar and its spacing

  // Clear canvas
  ctx.clearRect(0, 0, chartWidth, chartHeight);

  // Draw axes
  ctx.strokeStyle = "#000";
  ctx.beginPath();
  ctx.moveTo(padding, padding);
  ctx.lineTo(padding, chartHeight - padding); // Y-axis
  ctx.lineTo(chartWidth - padding, chartHeight - padding); // X-axis
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
    ctx.fillText(value.toFixed(1), x, chartHeight - padding + 20);
  }

  // Draw horizontal bars
  labels.forEach((label, index) => {
    const y = padding + index * totalBarHeight;

    // Pre-Synergy Bar
    const preBarWidth = (preSynergyData[index] / maxDataValue) * chartAreaWidth;
    ctx.fillStyle = barColors[0];
    ctx.fillRect(padding, y, preBarWidth, barHeight);

    // Post-Synergy Bar
    const postBarWidth = (postSynergyData[index] / maxDataValue) * chartAreaWidth;
    ctx.fillStyle = barColors[1];
    ctx.fillRect(
      padding + preBarWidth,
      y,
      postBarWidth,
      barHeight
    );

    // Draw labels for the bar groups
    ctx.fillStyle = "#000";
    ctx.textAlign = "right";
    ctx.fillText(label, padding - 10, y + barHeight / 1.5);
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
}
</style>
