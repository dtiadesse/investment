<script setup lang="ts">

const refreshing = ref(false);
const clearing = ref(false);
async function handleRefresh() {
  refreshing.value = true;
  await refresh();
  refreshing.value = false;
}
async function handleClear() {
  clearing.value = true;
  await clear();
  clearing.value = false;
}
</script>

<template>
  <NuxtLink to="/home" class="font-bold">Investment App</NuxtLink>
</template>
