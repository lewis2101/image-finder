<script setup lang="ts">
import { onMounted } from "vue";

// onMounted(() => {
//   fetch("https://api.pexels.com/v1/search?query=Природа&per_page=10&size=medium&locale=ru", {
//     headers: {
//       "Authorization": import.meta.env.VITE_PEXELS_API_KEY,
//     }
//   })
// })

</script>

<template>
  <RouterView />
</template>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
