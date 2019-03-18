<template>
  <div id="user">
    <h1>个人信息</h1>
    <p>姓名:{{userName}}</p>
    <p>年龄：{{age}}</p>
  </div>
</template>
<script>
export default {
  name: 'User',
  data () {
    return {
      userName: 'dream.cc',
      age: 24
    }
  }
}
</script>
<style>
#user {
  color: blue
}
#user p{
  background: deeppink;
}
</style>
