<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
    <button @click="add">add</button>
    <button @click="decrease">decrease</button>
    <button @click="oddAdd">add</button>
    <div>{{count}}</div>
    <div>{{getOdd}}</div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'App',
  computed: mapGetters(['count','getOdd']),
  methods: mapActions(['add','decrease','oddAdd'])
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
