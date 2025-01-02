<template>
  <div class="xl:container mx-auto h-full grid grid-cols-[16rem_1fr]">
    <!-- Left Column -->
    <div class="bg-white">
      <LeftPane />
    </div>
    <!-- Right Column -->
    <div class="ng-white overflow-auto">
      <Header />
      <div class="container pt-2 px-2">
        <slot />
      </div>

    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");

body {
  font-family: "Inter", serif;
  font-optical-sizing: auto;
  /* font-weight: <weight>; */
  /* font-style: normal; */
}

.router-link-exact-active {
  color: #12b488;
}
</style>
