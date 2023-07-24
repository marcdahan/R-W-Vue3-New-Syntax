<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios';
import EventCard from '@/components/EventCard.vue'


const events = ref(null)

onMounted(()=> {
  axios
  .get('http://demo1895579.mockable.io/API-Calls-with-Axios'
  ).then((response)=> {
    console.log( "call succeed to http://demo1895579.mockable.io/API-Calls-with-Axio")
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