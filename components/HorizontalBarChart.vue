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
        labels: ['YR1', 'YR2', 'YR3', 'YR4', 'YR5', 'YR4', 'YR5'],
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
       indexAxis: 'y',
       aspectRatio: 1.4,
       plugins: {
            title: {
              display: true,
              text: 'Total Consideration vs At-Risk Consideration',
              align:'start',
              font:{weight: 'bold',size:'18'},
              padding:24,
              color:'#000'
            },
            tooltip: {
                enabled: false, // Disable tooltips
            },
            legend: {
                display: false,   
            },
            
        },
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
            categoryPercentage: 1.5, // Space between categories (smaller = more space)
            barPercentage: 2
          }
        }
      },
    });
  }
});
</script>

<style scoped>

</style>
