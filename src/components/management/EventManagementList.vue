<template>
  <div class="q-py-sm" v-for="event in events" :key="event.id">
    <event-management-card :event="event" />
  </div>
</template>

<script setup lang="ts">
import EventManagementCard from './EventManagementCard.vue';

let events = [
  {
    id: 0,
    title: 'Praktis!',
    date: 'Dzisiaj • 21:00 - 01:00',
    address: 'Wielka 19/7, Poznań',
    organisator: 'Retro Dance Studio',
    link: 'https://localhost:9000/#',
    image: 'https://i.ytimg.com/vi/R2fOXATC9dg/maxresdefault.jpg',
  },
  {
    id: 1,
    title: 'Wprawki swingowe w Dublinerze',
    date: '14 listopada 22 • 20:00 - 01:00',
    address: 'SARP social club, Stary Rynek 56, Poznań',
    organisator: 'Monika Karioka Roszyk',
    link: 'https://localhost:9000/#',
    image:
      'https://swingcraze.pl/wp-content/uploads/2016/11/2016_WprawkiSwingCraze-768x288.jpg',
  },
  {
    id: 2,
    title: 'Swing in Poland',
    date: '1 stycznia 2023 • 18:00 - 01:00',
    address: 'Ulica numer, Poznań',
    organisator: 'Swing in Poland',
    link: 'https://localhost:9000/#',
    image:
      'https://swingcraze.pl/wp-content/uploads/2019/08/2019_KursWestCoastSwingDlaZnajacychPodstawy-700x368.jpg',
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
    status: 2,
  },
];
</script>
