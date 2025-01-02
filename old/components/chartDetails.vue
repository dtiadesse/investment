<template>
  <div class="card">
    <div class="grid grid-cols-2 gap-10">
   
      <div class="p-7">
        <h2>{{ chart.title }}</h2>
       
        <h3 class="font-bold border-b-2 mb-4 pb-2">Chart description:</h3>
        <p class="mb-7">{{ chart.preSynergyMultiple }}</p>
         <p class="text-xl my-7">{{ chart.postSynergyMultiple }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
  const { chart } = defineProps(['chart'])
</script>

<style scoped>
  img {
    max-width: 400px;
  }
</style>