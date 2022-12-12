<template>
  <q-page class="column q-mx-xl">
    <router-link to="/">« Powrót</router-link>

    <div class="row justify-between q-mb-md">
      <h4 class="q-my-none">Wydarzenia dla miasta Poznań</h4>
      <q-btn
        class="self-end text-bold"
        color="primary"
        label="Dodaj wydarzenie"
      />
    </div>

    <event-management-list />
  </q-page>
</template>

<script setup lang="ts">
import EventManagementList from 'components/management/EventManagementList.vue';

function addEvent(): void {
  console.log('Add event!');
}
</script>
