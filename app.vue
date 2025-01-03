<template>
<div class="dark">
  <NuxtLayout :name="currentLayout">
    <NuxtPage />
  </NuxtLayout>
  </div>
</template>

<script setup>
const currentLayout = 'defaults'; // Change to other layout names dynamically
</script>
