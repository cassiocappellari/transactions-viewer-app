<template>
  <div id="app">
    <TransactionsList />
  </div>
</template>

<script>
import TransactionsList from './components/TransactionsList.vue'

export default {
  name: 'App',
  components: {
    TransactionsList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
