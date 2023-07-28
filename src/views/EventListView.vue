<script setup>
import { ref, onMounted } from 'vue'
import EventCard from '@/components/EventCard.vue'
import EventServices from '@/services/EventServices.js'


const events = ref(null)

onMounted(()=> {
  EventServices.getEvents()
  .then((response)=> {
    console.log(`response received : `+ JSON.stringify(response.data[0]) + `, {...`)
    events.value = response.data
  }).catch((error)=> {
    console.log(error)
  })
})

</script>

<template>
  <h1>Events For Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<style>
.events {
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
}
</style>