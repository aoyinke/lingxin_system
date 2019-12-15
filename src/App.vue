<template>
  <div id="app">
<<<<<<< HEAD
      <router-link to="/login"></router-link>
      <router-link to="/home"></router-link>
=======
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
>>>>>>> a5b846e31b530d198b00bdb2dbd5ccde37889eb6
    <router-view/>
  </div>
</template>

<<<<<<< HEAD

<script>
import login from './components/login' // 引入login.vue组件
export default {
  name: 'App',
  components: {
    'login': login 
  }
}
</script>



<style lang="scss">
 html,body,#app{
   height: 100%;
 }
=======
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
>>>>>>> a5b846e31b530d198b00bdb2dbd5ccde37889eb6
</style>
