<template>
  <div class="chart-container">
    <canvas ref="chartCanvas" :width="640" :height="440"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';

// Props
const props = defineProps({
  seriesLabels: {
    type: Array,
   default: () => [],
  },
  datasets: {
    type: Array,
    required: true,
  },
  labels: {
    type: Array,
    required: true,
  },
  barColors: {
    type: Array,
    default: () => ["#2C2F48", "#00A8E8"],
  },
});

// Refs
const chartCanvas = ref(null);

// Chart drawing logic
const drawChart = () => {
  const canvas = chartCanvas.value;
  const ctx = canvas.getContext('2d');
  const { width, height } = canvas;

  // Chart dimensions
  const margin = 60;
  const yAxisWidth = 18;
  const xAxisHeight = 50;
  const chartHeight = height - 2 * margin - xAxisHeight;
  const chartWidth = width - 2 * margin - yAxisWidth;

  // Calculate the maximum value across all datasets
  const maxValue = Math.max(...props.datasets.flat());
  const step = maxValue / 5;

  // Function to draw the Y-axis on the right
  const drawYAxis = () => {
    const xStart = width - margin - yAxisWidth;

    ctx.beginPath();
    ctx.moveTo(xStart, margin); // Top of Y-axis
   //ctx.lineTo(xStart, margin + chartHeight); // Bottom of Y-axis
    ctx.strokeStyle = '#000';
    //ctx.lineWidth = 2;
    ctx.stroke();

    // Draw ticks and labels
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.font = '12px Arial';

    for (let i = 0; i <= 5; i++) {
      const y = margin + chartHeight - (i * chartHeight) / 5;
      const label = (i * step).toFixed(0);

      // Tick
      ctx.beginPath();
      ctx.moveTo(xStart, y);
      ctx.lineTo(xStart - chartWidth, y);
      ctx.strokeStyle = '#ddd';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Label
      ctx.fillStyle = '#000';
      ctx.fillText(label, xStart + 10, y);
    }
  };

  // Function to draw the X-axis
  const drawXAxis = () => {
    const yStart = margin + chartHeight;
    const xStart = margin;

    ctx.beginPath();
    ctx.moveTo(xStart, yStart); // Left of X-axis
   // ctx.lineTo(width - margin - yAxisWidth, yStart); // Right of X-axis
   // ctx.strokeStyle = '#000';
   // ctx.lineWidth = 2;
    ctx.stroke();

    // Draw labels
    const groupWidth = chartWidth / props.labels.length;
    props.labels.forEach((label, index) => {
      const x = xStart + index * groupWidth + groupWidth / 2;

      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      ctx.fillStyle = "black";
      ctx.fontWeight = "bold";
      ctx.font = "14px Arial";
      ctx.textAlign = "center";// Rotate 45 degrees
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
      ctx.fillText(truncatedText, x, yStart + 5);
      ctx.restore();
     // ctx.fillStyle = '#000';      
      //ctx.fillText(label, x, yStart + 5);
    });
  };

  // Function to draw the bars
  const drawBars = () => {
    const groupWidth = chartWidth / props.labels.length;
    const barWidth = groupWidth / props.datasets.length - 18;

    props.labels.forEach((label, labelIndex) => {
     props.datasets.forEach((dataset, datasetIndex) => {
        const value = dataset[labelIndex];
        const barHeight = (value / maxValue) * chartHeight;

        const x =
          margin +
          labelIndex * groupWidth +
          datasetIndex * (barWidth);
        const y = margin + chartHeight - barHeight;

        // Draw bar
        ctx.fillStyle = props.barColors[datasetIndex];
        ctx.fillRect(x, y, barWidth, barHeight);

        // Draw value on top of the bar
        ctx.textAlign = 'center';
        ctx.textBaseline = 'bottom';
        ctx.fillStyle = '#fff';
        ctx.fillText(value, x + barWidth / 2, y + 25);
      });
    });
     const legendXStart = 150;
      const legendY = chartHeight + 115; // Position above canvas bottom
      const legendSpacing = 160;
      if(props.seriesLabels.length>0){
        props.seriesLabels.forEach((label, index) => {
        const x = legendXStart + index * legendSpacing;

        // Draw legend color box
        ctx.fillStyle = props.barColors[index];
        ctx.fillRect(x, legendY, 15, 15);

        // Draw legend text
        ctx.fillStyle = "#0f0d0dc7";
        ctx.font = "14px Arial";
        ctx.textAlign = "left";
        ctx.fillText(label, x + 20, legendY + 15); // Add space after color box
      });
      }
  };
  
  // Clear the canvas
  ctx.clearRect(0, 0, width, height);

  // Draw axes and bars
  drawYAxis();
  drawXAxis();
  drawBars();
};

// Watch for prop changes
watch(() => [props.datasets, props.labels], drawChart, { deep: true });

onMounted(drawChart);
</script>

<style scoped>
.chart-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.chart {
  display: block;
  position:relative;
}
</style>
