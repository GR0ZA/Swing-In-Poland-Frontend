<template>
  <q-card class="event-card" flat square>
    <q-card-section class="row" horizontal>
      <q-img
        class="col-4 event-image"
        img-class="my-custom-image"
        :src="event.image"
        :img-style="
          !event.confirmed ? { filter: 'grayscale()' } : { filter: 'none' }
        "
      >
        <div v-if="!event.confirmed" class="absolute-bottom">
          Wydarzenie czeka na potwierdzenie przez organizatora
        </div>
      </q-img>
      <q-card-actions vertical class="q-pa-lg row justify-between">
        <span>{{ event.date }}</span>
        <h5 class="q-ma-none">{{ event.title }}</h5>
        <div>
          <q-icon name="location_on" />
          <span>{{ event.address }}</span>
        </div>
        <span>
          Organizator: <b>{{ event.organisator }}</b>
        </span>
        <a :href="event.link">Link do wydarzenia</a>
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
.event-card {
  max-height: 200px;
  background-color: $card-background;
  .event-image {
    height: 200px;
  }
}
</style>
