<script setup lang="ts">
import { computed } from "vue"

const icons = import.meta.glob('@/app/assets/*.svg', { eager: true, import: 'default', as: 'raw' })

type SvgIconNames = 
| "search-list" 
| "menu" 
| "time" 
| "check" 
| "plus" 
| "search" 
| "cross" 
| "arrow-down";

interface Props {
  name: SvgIconNames
}

const props = defineProps<Props>();

const svgContent = computed(() => {
  const path = `/src/app/assets/${props.name}.svg`
  return icons[path] || null
})
</script>

<template>
  <span
    v-if="svgContent"
    v-html="svgContent"
  />
</template>

<style scoped>
span svg {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
