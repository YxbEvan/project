<template>
  <div class="hello">
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
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: mapGetters(['count','getOdd']),
  methods: mapActions(['add','decrease','oddAdd'])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
