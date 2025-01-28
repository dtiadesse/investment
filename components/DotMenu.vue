<template>
  <div class="dot-menu" @click.stop="openMenu">
    <span class="dot">⋮</span>
  </div>
</template>

<script setup lang="ts">
console.log('DotMenu component rendered');
import { defineProps, defineEmits } from "vue";

// Emitting open menu event to parent component
const emit = defineEmits();
const props = defineProps();

// Open menu event
const openMenu = (event: any) => {
  emit("openMenu", event, props.value);
};
</script>

<style scoped>
.dot-menu {
  cursor: pointer;
  font-size: 20px;
}

.dot {
  font-weight: bold;
}
</style>
