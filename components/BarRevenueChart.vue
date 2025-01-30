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
Chart.register(CategoryScale, LinearScale, BarElement, BarController, Title, Tooltip, Legend,ChartDataLabels);

const chartRef = ref(null); // Ref to hold the chart instance
let myChart = null;

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

const Barchart = () => {
if (!chartRef.value) return;
  const ctx = chartRef.value.getContext('2d');
  if (myChart) {
      myChart.destroy();
    }
  myChart =  new Chart(ctx, {
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
                  display: false, // Position of the legend
                },
                tooltip: {
                  enabled: false, // Disable tooltips
                },
                datalabels: {
                  display: (context) =>context.datasetIndex === 1, // Only display labels on the first bar
                  anchor: 'end', // Places the label on top of the bar
                  align: 'top', // Aligns text to the top of the bar
                  offset: -25, // Add spacing/margin between label and top of bar // Position the label on top of the bar
                  font: {
                    weight: 'bold',
                  },
                  color: 'white', // You can change the color of the text here
                }
              },
            scales: {
             y: {
                position: 'right',
                beginAtZero: true,
                border: {
                    display: false
                },
              }, 
              x: {             
                grid: {
                    display: false,
                },
                border: {
                    display: false
                },
              },             
            },
          } 
  });
}
onMounted(() => {
 Barchart();
});
watch(() =>[props.datasets, props.labels],
  Barchart
);
</script>

<style scoped>
canvas {
  width: 80%;
  height: 400px;
}
</style>
