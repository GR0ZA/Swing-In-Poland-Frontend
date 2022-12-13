<template>
  <div
    class="q-px-xs-xs q-py-xs-sm q-px-sm-lg q-py-sm-md q-px-md-xl"
    v-for="event in events"
    :key="event.id"
  >
    <event-card :event="event" />
  </div>
</template>

<script setup lang="ts">
import EventCard from './EventCard.vue';

import { SwingEvent } from 'src/entities/swing-event';

interface Props {
  events: SwingEvent[];
}

defineProps<Props>();
</script>
