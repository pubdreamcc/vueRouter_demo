<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="link">
      <router-link to="/main" class="mainPage">首页</router-link>
      <router-link to="/person" class="personCenter">个人中心</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  margin-top: 100px;
  text-align: center;
}
.router-link-active {
  background: #11388d9d;
}
</style>
