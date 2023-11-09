<script setup>
defineProps({
    msgtransmittedtothecomponent: {
    type: String,
    required: true
  }
})
</script>

<template>
    <div>
        <h1>{{ msgtransmittedtothecomponent }}</h1>
        <h3></h3>
    <p></p>
    </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}
</style>
