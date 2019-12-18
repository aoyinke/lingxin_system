<template>
  <div id="app">
    <router-link to="/login"></router-link>
      <router-link to="/home"></router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
 html,body,#app{
   height: 100%;
 }
</style>
