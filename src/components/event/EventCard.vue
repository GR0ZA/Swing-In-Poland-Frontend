<template>
  <div>
    <p>{{ title }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
}
const props = withDefaults(defineProps<Props>(), {
  title: '',
});
</script>
