<template>
  <div class="container">
    <div class="topnav">
      <a class="active" href="#home">Home</a>
      <a><router-link to = "/about">About</router-link></a>
    </div>
    <div id="mainimg">
      <img id="img" src="../assets/1.gif" />
    </div>
    <DemoPage />
    <RecordsofChannel />
    <TheFooter />
    <router-view></router-view>
  </div>
</template>

<script>
  import AboutPage from './AboutPage.vue';
  import { createRouter, createWebHistory } from 'vue-router';
  import { createApp } from 'vue';

  const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/about', component: AboutPage }
    ]
  });

  export default {
    head: {
      title: 'Let us Learn Together',
    },
    data() {
      // router
    },
    methods: {}
  }
  const app = createApp({})
  app.use(router)
  window.vm = app.mount('#app')

  // Vue.use(router);

  // new Vue({
  //   el: '#app',
  //   router
  // });
  // console.log("vm----", vm)
  // vm.use(router)

  // const app = new Vue({
  //   router
  // }).$mount('#app');

</script>

<style>
  #img {
    padding: 20px;
    height: 300px;
    margin-top: 30px;
  }
  #mainimg {
    text-align: center;
    height: 350px;
  }
  img {
    border-radius: 5px;
    border: 5px solid;
    height: 130px;
  }
  h1 {
    color: blue;
    text-align: center;
  }
  .data1 {
    display: flex;
    flex-flow: row wrap;
    padding: 10px;
    text-align: center;
  }
  .data11 {
    box-sizing: border-box;
    width: 310px;
    height: auto;
    padding: 8px;
    border: 1px solid #aaa;
    box-shadow: 2px 2px 2px 2px #aaa;
    text-decoration: none;
  }
  .buttons {
    text-align: center;
    color: white;
    padding: 10px 5px 10px 5px;
    height: 60px;
    margin-top: 2rem;
    margin-bottom: auto;
  }
  button {
    width: auto;
    height: 30px;
    border-radius: 5px;
    font-family: 'Courier New', Courier, monospace;
    font-size: 17px;
    border: 1px solid white;
    padding-left: 15px;
    padding-right: 15px;
    margin-right: 8px;
    margin-left: 8px;
    background-color: black;
    color: white;
    cursor: pointer;
  }
  button:hover {
    background-color: gray;
  }
  .topnav {
    overflow: hidden;
    background-color: #333;
  }
  .topnav a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }
  .topnav a:hover {
    background-color: #ddd;
    color: black;
  }
  .topnav a.active {
    background-color: #04aa6d;
    color: white;
  }
  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }
  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }
  .links {
    padding-top: 15px;
  }
</style>