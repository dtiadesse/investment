<template>
  <ul class="nav-menu list-none">
    <li><a href="javascript:;" class="active">Home</a></li>
    <li><a href="javascript:;">My Investments</a>
      <ul class="list-none">
        <li><a href="javascript:;">Investments Dashboard</a></li>
        <li><a href="javascript:;"> Investment 1</a></li>
        <li><a href="javascript:;">Investment 2</a></li>
        <li><a href="javascript:;">Investment 3</a></li>
      </ul>
    </li>
  </ul>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.nav-menu li a {
  display: block;
  width: 100%;
  padding: 0.6rem;
  padding-left: 1rem;
  padding-right: 0.25rem;
  font-weight: 500;
  font-size: 15px;
}

.nav-menu li ul li a {
  padding-left: 2rem;
}

.nav-menu li a.active {
  background: rgb(57 89 249 / 6%);
  border-right: 2px solid #3758F9;
  color: #3758F9;
}
</style>