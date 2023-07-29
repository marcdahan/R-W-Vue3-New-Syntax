<script>
import EventServices from '@/services/EventServices.js'

export default {
  data() {
    return {
      eventDetail: {
        title: null,
        category: null,
        description: null,
        location : null,
        date : null,
        time : null,
        organizer : null
      }
    }
  },
  methods: {
    setEventDetail(obj) {
      this.eventDetail = obj
    }
  },
  mounted () {
    EventServices.getEventDetail()
    .then((response)=> {
      console.info(`response received from getEvent: `+ JSON.stringify(response.data[0]) + `, {...`)
        this.setEventDetail(response.data)
    }).catch((error)=> {
      console.log(error)
    })
  },
}

</script>

<template>
  <div class="events event-detail">
    <h2>{{ this.eventDetail.title }}</h2>
    <p>{{ this.eventDetail.category }}</p>
    <p>{{ this.eventDetail.description }}</p>
    <p>location : {{ this.eventDetail.locaction }}</p>
    <p>@{{ this.eventDetail.time }} on {{ this.eventDetail.date }}</p>
    <p>organizer : {{ this.eventDetail.organizer }}</p>
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
