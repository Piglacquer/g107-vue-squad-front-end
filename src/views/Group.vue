<template>
  <div class='group-view'>
    <h1>VUE SQUAD</h1>
    <div class='card-list'>
      <IndividualCard 
        v-for='hero in uselessSuperheroes' 
        :key="'hero' + hero.id"
        :student='hero' />
    </div>
  </div>
</template>

<script>
import IndividualCard from '../components/IndividualCard.vue'

export default {
  data() {
    return {
      uselessSuperheroes: null
    }
  },
  components: {
    IndividualCard
  },
  methods: {
    getUselessSuperheroes() {
      fetch('https://g107-db.herokuapp.com/students')
      .then(resp => resp.json())
      .then(resp => this.uselessSuperheroes = resp.students)
    }
  },
  mounted() {
    this.getUselessSuperheroes()
  }
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
