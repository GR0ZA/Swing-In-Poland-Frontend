<template>
  <div>
    <h1>TEST</h1>
    <h2>TEST</h2>
    <h3>TEST</h3>
    <h4>TEST</h4>
    <h5>TEST</h5>
    <h6>TEST</h6>
    <p>{{ title }}</p>
    <q-btn @click="getEvents" color="primary" label="Get Events" />
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
