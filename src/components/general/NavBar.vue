<template>
  <q-header elevated>
    <q-toolbar>
      <q-toolbar-title>Swing in Poland</q-toolbar-title>
      <q-btn v-if="isUserLoggedIn" @click="logoutUser" icon="logout" />
      <q-btn v-else @click="loginUser" icon="login" />
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useAuth0 } from '@auth0/auth0-vue';

const { loginWithRedirect, logout, user } = useAuth0();

function loginUser(): void {
  loginWithRedirect();
}

function logoutUser(): void {
  logout();
}

const isUserLoggedIn = computed(() => {
  return user.value;
});
</script>
