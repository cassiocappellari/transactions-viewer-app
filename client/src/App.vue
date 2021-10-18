<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
	name: "App",
};
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
a:link {
  text-decoration: none;
}
table {
  width: 90%;
}
td, th {
  padding: 8px;
  border: 1px solid #dddddd;
}
#back-container {
  margin-bottom: 16px;
}
#filter-button,
#filter-end-month {
  margin-left: 16px;
}
#filter-container {
  margin-bottom: 16px;
}
</style>