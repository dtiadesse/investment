<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/home" class="page-title">Investment App</NuxtLink>
        <ul class="flex gap-4">
          <li><NuxtLink to="/home">Home</NuxtLink></li>
          <li><NuxtLink to="/dashboard">Dashboard</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}

.page-title {
  color: black;
  font-size: 2rem;
}
</style>
