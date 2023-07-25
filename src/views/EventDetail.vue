<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

export default () {
  data() {
    return {
      event: null
    }
  },
  created() {
    //fetch event by id
  },
}

/* defineProps({
  event: {
    type: Object,
    required: true,
  },
})


const event = ref(null)

onMounted(()=> {
  axios
  .get('http://demo1895579.mockable.io/API-Calls-with-Axios/id=' + id
  ).then((response)=> {
    console.log( "call succeed to http://demo1895579.mockable.io/API-Calls-with-Axio")
    event.value = response.data
  }).catch((error)=> {
    console.log(error)
  })
}) */

</script>

<template>
  <div class="events event-detail">
    <h2>{{ event.title }}</h2>
    <span>{{ event.category }}</span>
    <span>{{ event.description }}</span>
    <span>@{{ event.time }} on {{ event.date }}</span>
    <span>organizer : {{ event.organizer }}</span>
    <span>location : {{ event.locaction }}</span>
  </div>
</template>

<style scoped>
.event-detail {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.event-detail:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
h2 {
  font-size: medium;
}
</style>
