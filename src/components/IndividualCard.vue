<template>
  <div>
    <h1>{{student.name}}</h1>
    <img :src="student.fave_animal" alt="student fave animal">
    <p>{{student.useless_superpower}}</p>
    <p>{{student.previous_occupation}}</p>
  </div>
</template>

<script>
export default {
  props: ['student']
}
</script>

<style scoped>
  div {
    margin: 0 20px 20px 0;
    padding: 10px;
    background-color: black;
    color: white;
    border-radius: 5px;
    width: 20vw;
    height: 50vh;
    overflow: scroll;
  }
  img {
    max-width: 19vw;
    max-height: 30vh;
  }
</style>
