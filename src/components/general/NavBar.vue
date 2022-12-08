<template>
  <q-header elevated>
    <q-toolbar>
      <q-toolbar-title class="row justify-center">
        Swing in Poland
      </q-toolbar-title>
      <q-btn @click="login" icon="login" />
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
function login(): void {
  console.warn('LOGIN: Not implemented yet.');
}
</script>
