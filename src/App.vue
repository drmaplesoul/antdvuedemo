<!--<template>-->
<!--  <div id="app">-->
<!--    &lt;!&ndash;<img alt="Vue logo" src="./assets/logo.png">&ndash;&gt;-->
<!--    <Apply-Main contentHeight=800 />-->
<!--  </div>-->
<!--</template>-->
<template>
  <div id="app">
    <!--可以定义不变的内容-->
<!--    <h3>{{title}}</h3>-->
    <!--定义路由插座-->
    <router-view></router-view>
    <!--可以定义不变的内容-->
  </div>
</template>

<script>
// import ApplyMain from './pages/workflow/taskDetailMain/TaskDetailMain.vue'

export default {
  name: 'app',
  // components: {
  //   ApplyMain
  // }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5px;
}
</style>
