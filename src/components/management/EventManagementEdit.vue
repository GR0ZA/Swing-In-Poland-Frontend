<template>
  <div class="q-px-md">
    <q-separator />
    <h6 class="q-my-none q-mt-md">Edycja</h6>

    <q-form class="q-pt-md q-pb-lg">
      <div class="q-gutter-md row items-start">
        <q-input
          filled
          v-model="test.title"
          label="Nazwa wydarzenia*"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'To pole nie może być puste',
          ]"
        />

        <q-input
          filled
          v-model="test.organisator"
          label="Organizator*"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'To pole nie może być puste',
          ]"
        />

        <q-input
          filled
          v-model="test.link"
          label="Link*"
          :rules="[
            (val) => (val && val.length > 0) || 'To pole nie może być puste',
          ]"
        />

        <q-input
          filled
          v-model="test.address"
          label="Adres*"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'To pole nie może być puste',
          ]"
        />

        <q-input
          filled
          v-model="test.date"
          label="Data*"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'To pole nie moze być puste',
          ]"
        />
      </div>

      <div>
        <q-btn label="Zapisz" type="submit" color="primary" class="text-bold" />
        <q-btn
          label="Anuluj"
          type="reset"
          color="primary"
          outline
          class="q-ml-sm text-bold"
        />
      </div>
    </q-form>
  </div>
</template>

<script setup lang="ts">
import { SwingEvent } from 'src/entities/swing-event';
import { ref } from 'vue';

interface Props {
  event: SwingEvent;
}
const props = defineProps<Props>();

let test = ref(props.event);
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
