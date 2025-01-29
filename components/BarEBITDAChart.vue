<template>
  <div>
    <canvas ref="chartRef"></canvas>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { Chart, CategoryScale, LinearScale, BarElement, BarController, Title, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Register necessary components from Chart.js
Chart.register(CategoryScale, LinearScale, BarElement, BarController, Title, Tooltip, Legend);

const chartRef = ref(null); // Ref to hold the chart instance

// Props
const props = defineProps({  
  datasets: {
    type: Array,
    required: true,
  },
  labels: {
    type: Array,
    required: true,
  },
});

onMounted(() => {
console.log(props)
  const ctx = chartRef.value.getContext('2d');
  new Chart(ctx, {
    type: 'bar', // Define chart type
    data: {
            labels: props.labels,
            datasets: [
              {
                data: props.datasets[0],
                backgroundColor: '#00A8E8',
                borderWidth: 1
              },
              {
                data: props.datasets[1],
                backgroundColor: '#2C2F48',
                borderWidth: 1
              }
            ]
          }, 
      options: {
            responsive: true,
            maintainAspectRatio: false,
            categoryPercentage: 0.5, // here 
            barPercentage: 1.05,  // here
            plugins: {
                legend: {
                  display: false // Position of the legend
                },
                tooltip: {
                  enabled: false, // Disable tooltips
                },
                datalabels: {
                  display: false // You can change the color of the text here
                }
              },
            scales: {
              x: {                
                grid: {
                  drawOnChartArea:false,
                  drawBorder:false,
                  drawTicks: false,
                  lineWidth: 0,// Hides the Y-axis grid lines completely
                },
              },
              
              y: {
                position: 'right',
                beginAtZero: true,
                grid: {
                  drawTicks: false,
                  lineWidth: 1,// Hides the Y-axis grid lines completely
                },
                ticks: {
                  display: true, // Keeps numbers visible
                },
              },             
            },
          } 
  });
});
</script>

<style scoped>
canvas {
  width: 80%;
  height: 400px;
}
</style>
