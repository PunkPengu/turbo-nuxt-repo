<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  type?: 'PRIMARY',
}

const props = withDefaults(defineProps<Props>(), {
  type: 'PRIMARY',
})

const classObj: Record<Props['type'], string> = {
  PRIMARY: 'bg-gray-300',
}

const classes = computed(() => classObj[props.type])
</script>

<template>
  <button
    class="inline-block border-0 px-1 py-0.5"
    :class="classes"
  >
    <slot />
  </button>
</template>
