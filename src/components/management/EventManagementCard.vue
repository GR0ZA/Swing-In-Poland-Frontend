<template>
  <q-card class="event-management-card" flat square>
    <q-card-section class="row justify-between" horizontal>
      <q-card-section>
        <span>{{ event.date }}</span>
        <h5 class="q-ma-none">{{ event.title }}</h5>
      </q-card-section>
      <q-card-actions class="q-mr-sm">
        <a :href="event.link">Anuluj</a>
        <a :href="event.link">Edytuj</a>
        <span>Wydarzenie potwierdzone</span>
      </q-card-actions>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { SwingEvent } from 'src/entities/swing-event';

interface Props {
  event: SwingEvent;
}

defineProps<Props>();
</script>

<style scoped lang="scss">
.event-management-card {
  .q-card__actions {
    gap: 1rem;
  }
}
</style>
