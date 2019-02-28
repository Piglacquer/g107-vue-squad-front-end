<template>
  <div class='group-view'>
    <h1>VUE SQUAD</h1>
    <div class='card-list'>
      <IndividualCard 
        v-for='hero in uselessSuperheroes' 
        :key="'hero' + hero.id"
        :hero='hero' />
    </div>
  </div>
</template>

<script>
import IndividualCard from '../components/IndividualCard.vue'

export default {
  components: {
    IndividualCard
  },
  props: ['uselessSuperheroes']
}
</script>

<style scoped>
.group-view {
  width: 100vw;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
.card-list {
  width: 90vw;
  height: auto;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
}
</style>
