<template>
  <header class="shadow-sm bg-white header">
    <nav class="xl:container mx-auto px-4 py-6 flex justify-between">
      <!-- <NuxtLink to="/home" class="page-title">Investment App</NuxtLink> -->
      <div class="grid gap-4 grid-cols-2">
        <div>
          <h1 class="text-xl">Hello {{ formattedName(user?.userName) }} !</h1>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts" setup>
import { formattedName } from '~/utils/utils';

const { user } = useOidcAuth();


</script>

<style scoped>
.header {
  position: sticky;
  left: 0;
  top: 0;
  background: white;
}

.page-title {
  color: black;
  font-size: 2rem;
}

.box1 {
  flex: 1;
  padding: 16px;
}

.box {
  flex: 1;
  padding: 16px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>