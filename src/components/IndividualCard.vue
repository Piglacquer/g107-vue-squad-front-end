<template>
  <router-link class='link' :to="{ path: `/individual/${hero.id}` }">
    <div>
      <h1>{{hero.name}}</h1>
      <img :src="hero.fave_animal" alt="hero fave animal">
      <p>{{hero.useless_superpower}}</p>
      <p>{{hero.previous_occupation}}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ['hero']
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
  .link {
    text-decoration: none;
  }
</style>
