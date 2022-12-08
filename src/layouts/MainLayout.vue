<template>
  <q-layout view="hHh Lpr fFf">
    <nav-bar />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import NavBar from 'src/components/general/NavBar.vue';
</script>
