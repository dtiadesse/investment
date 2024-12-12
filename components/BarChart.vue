<template>
  <div>
    <canvas ref="barChart"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Chart } from 'chart.js/auto';

const barChart = ref(null);
const props = defineProps({
  dataValue: {
    type: Array,
    required: true,
  },
  labelName1: {
    type: String,
  },
  labelName2: {
    type: String,
  },
  labelDisplay:{
    type: Boolean,
  }
});

const { dataValue,labelName1,labelName2,labelDisplay } = props;
onMounted(() => {
  if (barChart.value) {
    new Chart(barChart.value, {
      type: 'bar',
      data: {
        labels: ['YR1YR1YR1YR111', 'YR2YR2YR2YR2', 'YR3YR3YR3YR3', 'YR4YR4YR4YR4', 'YR5YR5YR5YR5'],
        datasets: [
          {
            label: labelName1,
            data: dataValue,
            backgroundColor: [
              'rgb(0, 0, 139, 1)',
              'rgb(0, 0, 139, 1)',
              'rgb(0, 0, 139, 1)',
              'rgb(0, 0, 139, 1)',
              'rgb(0, 0, 139, 1)',
              'rgb(0, 0, 139, 1)',
            ],
            borderWidth: 1,
          },
           {
            label: labelName2,
            data: dataValue,
            backgroundColor: [
              'rgb(128, 128, 128)',
              'rgb(128, 128, 128)',
              'rgb(128, 128, 128)',
              'rgb(128, 128, 128)',
              'rgb(128, 128, 128)',
              'rgb(128, 128, 128)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
      aspectRatio: 1.4,
       plugins: {
            title: {
              display: true,
              text: 'Pre and Post Synergy',
              align:'start',
              font:{weight: 'bold',size:'18'},
              padding:24,
              color:'#000'
            },
            tooltip: {
                enabled: false, // Disable tooltips
            },
            legend: {
                display: true,
                position:'bottom',
                labels: {
                    padding: 28 ,
                    font:{
                        size:14
                    }
                }
            },
            
        },
        responsive: true,
        scales: {
         x: {
            ticks: {
              callback: function (value, index, ticks) {
                // Add a cross symbol to labels
                const label = this.getLabelForValue(value);
                // Truncate long labels to 20 characters
                return label.length > 12 ? label.slice(0, 12) + '...' : label;
              },
              font: {
                size: 12 // Adjust font size for readability
              },
              color: 'black'
            }
          },
          y: {
            beginAtZero: true,
          },
        }
      },
    });
  }
});
</script>

<style scoped>

</style>
