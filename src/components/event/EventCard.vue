<template>
  <div>
    <p>{{ title }}</p>
    <button @click="getEvents">Get Events</button>
  </div>
</template>

<script setup lang="ts">
import { EventsService } from '../../services/events.service';

let eventsService = new EventsService();

interface Props {
  title: string;
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
});

function getEvents(): void {
  eventsService.getEvents();
}
</script>
