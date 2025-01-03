<template>
  <div class="chart-container">
    <canvas ref="canvas" class="chart"></canvas>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";

// Props for the chart
const props = defineProps({
  seriesLabels: {
    type: Array,
    required: true,
  },
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
    default: 800,
  },
  chartHeight: {
    type: Number,
    default: 400,
  },
  orientation: {
    type: String,
    default: "vertical", // Can be "vertical" or "horizontal"
    validator: (value) => ["vertical", "horizontal"].includes(value),
  },
  barSpacing: {
    type: Number,
    default: 10, // Space between groups of bars
  },
});

const canvas = ref(null);

const drawChart = () => {
  if (!canvas.value) return;

  const ctx = canvas.value.getContext("2d");
  const {
    seriesLabels,
    labels,
    preSynergyData,
    postSynergyData,
    chartWidth,
    chartHeight,
    orientation,
    barSpacing,
  } = props;

  // Set canvas size
  canvas.value.width = chartWidth;
  canvas.value.height = chartHeight;

  // Chart variables
  const padding = 90;
  const barColors = ["#2C2F48", "#00A8E8"];
  const maxDataValue = Math.max(...preSynergyData, ...postSynergyData);
  const chartAreaWidth = chartWidth - padding * 2;
  const chartAreaHeight = chartHeight - padding * 2;

  // Calculate bar sizes and spacing
  const numGroups = labels.length;
  const groupWidth =
    (orientation === "vertical" ? chartAreaWidth : chartAreaHeight) /
    numGroups;
  const barWidth = (groupWidth - barSpacing) / 2;

  // Clear canvas
  ctx.clearRect(0, 0, chartWidth, chartHeight);

  // Draw axes
  ctx.beginPath();
  if (orientation === "vertical") {
    ctx.moveTo(padding, padding);
   // ctx.lineTo(padding, chartHeight - padding);
   // ctx.lineTo(chartWidth - padding, chartHeight - padding);
  } else {
    ctx.moveTo(padding, chartHeight - padding);
    ctx.lineTo(chartWidth - padding, chartHeight - padding);
    ctx.lineTo(padding, padding);
  }
  ctx.stroke();

  // Draw grid lines and labels
  ctx.strokeStyle = "#fff";
  ctx.textAlign = "center";
  ctx.fillStyle = "#000";

  if (orientation === "vertical") {
    for (let i = 0; i <= 5; i++) {
      const y = padding + (chartAreaHeight / 5) * i;
      const value = (maxDataValue * (5 - i)) / 5;

      ctx.strokeStyle = "#ddd";
      // Horizontal grid lines
      ctx.beginPath();
      ctx.moveTo(padding, y);
      ctx.lineTo(chartWidth - padding, y);
      ctx.stroke();

      // Y-axis values
      ctx.fillStyle = "white";
      ctx.font = "12px Arial";
      ctx.textAlign = "center";
      ctx.fillText(value.toFixed(1), padding - 20, y + 5);
    }
  } else {
    for (let i = 0; i <= 5; i++) {
      const x = padding + (chartAreaWidth / 5) * i;
      const value = (maxDataValue * i) / 5;
      ctx.strokeStyle = "#ddd";

      // Vertical grid lines
      ctx.beginPath();
      ctx.moveTo(x, chartHeight - padding);
      ctx.lineTo(x, padding);
      ctx.stroke();

      // X-axis values
      ctx.fillText(value.toFixed(1), x, chartHeight - padding + 20);
    }
  }

  // Draw bars
  labels.forEach((label, index) => {
    const groupStart =
      padding +
      index * groupWidth +
      barSpacing / 2;

    const base = orientation === "vertical"
      ? chartHeight - padding
      : padding;

    // Pre-Synergy Bar
    const preValue = (preSynergyData[index] / maxDataValue) * (orientation === "vertical" ? chartAreaHeight : chartAreaWidth);
    const postValue = (postSynergyData[index] / maxDataValue) * (orientation === "vertical" ? chartAreaHeight : chartAreaWidth);

    if (orientation === "vertical") {
      // Pre-Synergy Bar
      ctx.fillStyle = barColors[0];
      ctx.fillRect(groupStart + 12, base - preValue, barWidth, preValue);

      // Post-Synergy Bar
      ctx.fillStyle = barColors[1];
      ctx.fillRect(groupStart + barWidth + 12, base - postValue, barWidth, postValue);

      const groupX = index * (2 * (barWidth + barSpacing)) + padding;
      // Draw label
      ctx.save();
      ctx.fillStyle = "white";
      ctx.font = "12px Arial";
      ctx.textAlign = "center";
      ctx.translate(groupStart-25 + (2* (barWidth + barSpacing)) / 2, chartHeight - padding + 35);
      ctx.rotate(-Math.PI / 4); // Rotate 45 degrees
      let truncatedText = label;
      const maxChars = 10;
      const maxWidth = 200; 
      if (label.length > maxChars) {
        truncatedText = label.slice(0, maxChars) + "...";
      }

      // Truncate text by pixel width
      while (ctx.measureText(truncatedText).width > maxWidth && truncatedText.length > 0) {
        truncatedText = truncatedText.slice(0, -1) + "...";
      }
      ctx.fillText(truncatedText, 0, 0);
      ctx.restore();
      //ctx.fillStyle = "#000";
      //ctx.textAlign = "center";
      //ctx.fillText(label, groupStart + barWidth / 2, chartHeight - padding + 15);
    } else {
      // Pre-Synergy Bar
      ctx.fillStyle = barColors[0];
      ctx.fillRect(base, groupStart, preValue, barWidth);

      // Post-Synergy Bar
      ctx.fillStyle = barColors[1];
      ctx.fillRect(base + preValue, groupStart + barWidth, postValue, barWidth);

      // Draw label
      ctx.fillStyle = "#fff";
      ctx.textAlign = "right";
      ctx.fillText(label, padding - 10, groupStart + barWidth);
    }
     const legendXStart = padding + 120;
      const legendY = chartHeight - 15; // Position above canvas bottom
      const legendSpacing = 160;
  
      seriesLabels.forEach((label, index) => {
        const x = legendXStart + index * legendSpacing;

        // Draw legend color box
        ctx.fillStyle = barColors[index];
        ctx.fillRect(x, legendY, 15, 15);

        // Draw legend text
        ctx.fillStyle = "#fff";
        ctx.font = "14px Arial";
        ctx.textAlign = "left";
        ctx.fillText(label, x + 20, legendY + 12); // Add space after color box
      });
  });
 
};

onMounted(() => {
  drawChart();
});

// Redraw chart if data changes
watch(
  () => [props.labels, props.preSynergyData, props.postSynergyData, props.orientation],
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
  position:relative;
  margin-top:-8px;
}
</style>
