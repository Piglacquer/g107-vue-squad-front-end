<template>
  <div>
    <h1>{{hero.name}}</h1>
    <img :src="hero.fave_animal" alt="hero's fave animal">
    <GmapMap
        :center="location"
        :zoom="7"
        map-type-id="terrain"
        style="width: 500px; height: 300px"
    >
      <GmapMarker
        :position="location"
      />
    </GmapMap>
    <p>Previous Occupation: {{hero.previous_occupation}}</p>
    <p>Useless Superpower: {{hero.useless_superpower}}</p>
  </div>
</template>
hometown_lat
hometown_long
<script>
export default {
  props: ['uselessSuperheroes'],
  computed: {
    hero: function() {
      return this.uselessSuperheroes.filter(hero => {
        let heroId = +this.$route.params.id
        return heroId === hero.id
      })[0]
    },
    location: function() {
      return { lat: +this.hero.hometown_lat, lng: -this.hero.hometown_long }
    }
  }
}
</script>

<style scoped>

</style>
