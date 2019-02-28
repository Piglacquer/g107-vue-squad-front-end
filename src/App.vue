<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/squad">Squad</router-link>
    </div>
    <router-view :uselessSuperheroes='uselessSuperheroes'/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uselessSuperheroes: null
    }
  },
  methods: {
    getUselessSuperheroes() {
      fetch('https://g107-db.herokuapp.com/students')
      .then(resp => resp.json())
      .then(resp => this.uselessSuperheroes = resp.students)
    }
  },
  mounted() {
    console.log(process.env.VUE_APP_GOOGLE_API_KEY)
    this.getUselessSuperheroes()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
