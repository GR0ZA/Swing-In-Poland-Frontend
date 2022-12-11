<template>
  <q-page class="q-pa-xl column">
    <page-header class="q-pb-lg" />
    <q-checkbox
      class="q-px-xl q-pb-sm"
      v-model="showConfirmed"
      @update:model-value="onCheckboxChange"
      label="Pokaż tylko potwierdzone wydarzenia"
      color="$primary"
    />
    <event-list />
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EventList from 'components/event/EventList.vue';
import PageHeader from 'components/general/PageHeader.vue';

let showConfirmed = ref(false);

function onCheckboxChange(): void {
  console.log('Change!');
}
</script>
