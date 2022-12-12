<template>
  <q-expansion-item expand-icon-toggle>
    <template v-slot:header>
      <q-card class="event-management-card" flat square>
        <q-card-section class="row justify-between" horizontal>
          <q-card-section>
            <span>{{ event.date }}</span>
            <h5 class="q-ma-none">{{ event.title }}</h5>
          </q-card-section>
          <q-card-actions class="q-mr-sm">
            <a href="/">Anuluj</a>
            <q-btn
              label="Potwierdź"
              color="primary"
              square
              outline
              class="q-ml-sm text-bold"
            />
          </q-card-actions>
        </q-card-section>
      </q-card>
    </template>

    <div class="q-px-md">
      <event-management-edit :event="event" />
    </div>
  </q-expansion-item>
</template>

<script setup lang="ts">
import { SwingEvent } from 'src/entities/swing-event';
import EventManagementEdit from './EventManagementEdit.vue';

interface Props {
  event: SwingEvent;
}
defineProps<Props>();
</script>

<style scoped lang="scss">
.q-expansion-item,
.q-expansion-item:hover {
  background-color: white;

  .event-management-card {
    width: 100%;
  }

  .q-card__actions {
    gap: 1rem;
  }
}
</style>
