<template>
  <q-page class="column">
    <page-header class="q-pb-lg" />
    <q-checkbox
      class="q-px-xs-xs q-px-sm-lg q-px-md-xl"
      v-model="showConfirmed"
      label="Pokaż tylko potwierdzone wydarzenia"
      color="primary"
    />
    <event-list :events="events" />
    <div class="q-pt-sm self-center">
      <q-btn
        color="primary"
        label="Pokaż więcej wydarzeń"
        class="text-bold text-overline"
        @click="loadMoreEvents"
      />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import EventList from 'components/event/EventList.vue';
import PageHeader from 'components/general/PageHeader.vue';

let eventsData = [
  {
    id: 1,
    title: 'Praktis!',
    date: 'Dzisiaj • 21:00 - 01:00',
    address: 'Wielka 19/7, Poznań',
    organisator: 'Retro Dance Studio',
    link: 'https://localhost:9000/#',
    image: 'https://i.ytimg.com/vi/R2fOXATC9dg/maxresdefault.jpg',
    confirmed: true,
  },
  {
    id: 2,
    title: 'Wprawki swingowe w Dublinerze',
    date: '14 listopada 22 • 20:00 - 01:00',
    address: 'SARP social club, Stary Rynek 56, Poznań',
    organisator: 'Monika Karioka Roszyk',
    link: 'https://localhost:9000/#',
    image:
      'https://swingcraze.pl/wp-content/uploads/2016/11/2016_WprawkiSwingCraze-768x288.jpg',
    confirmed: true,
  },
  {
    id: 3,
    title: 'Swing in Poland',
    date: '1 stycznia 2023 • 18:00 - 01:00',
    address: 'Ulica numer, Poznań',
    organisator: 'Swing in Poland',
    link: 'https://localhost:9000/#',
    image:
      'https://swingcraze.pl/wp-content/uploads/2019/08/2019_KursWestCoastSwingDlaZnajacychPodstawy-700x368.jpg',
    confirmed: true,
  },
  {
    id: 3,
    title: 'Swing in Poland',
    date: '8 stycznia 2023 • 18:00 - 01:00',
    address: 'Ulica numer, Poznań',
    organisator: 'Swing in Poland',
    link: 'https://localhost:9000/#',
    image:
      'https://swingcraze.pl/wp-content/uploads/2019/08/2019_KursWestCoastSwingDlaZnajacychPodstawy-700x368.jpg',
    confirmed: false,
  },
];

let showConfirmed = ref(false);

const events = computed(() => {
  return showConfirmed.value
    ? eventsData.filter((event) => event.confirmed)
    : eventsData;
});

function loadMoreEvents(): void {
  console.log('Load more events!');
}
</script>
