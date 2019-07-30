<template>
  <div id="app">
     <Header />
     <div class="main-wrapper">
       <NavBar />
       <router-view />
     </div>   
  </div>
</template>

<script>

import Header from './components/header/header'
import NavBar from './components/navbar/navbar'


export default {
  name: 'app',
  components: {
    Header,
    NavBar
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
.main-wrapper {
  display: flex;
  height: 85vh;
}
</style>
