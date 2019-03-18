<template>
  <div id="person">
    <h1>个人中心</h1>
    <p>这里是个人中心，欢迎访问个人相关信息</p>
    <router-link to="/person/user">用户信息</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'Person',
  data () {
    return { }
  }
}
</script>
<style>
  #person {
    color: greenyellow;
  }
  #person p {
    background: pink;
  }
</style>
