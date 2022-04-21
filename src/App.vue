<template>
  <HomePage />
  <DemoPage />
  <RecordsofChannel />
  <TheFooter />
</template>

<script>
  import HomePage from './components/HomePage.vue';
  import DemoPage from './components/DemoPage.vue';
  import RecordsofChannel from './components/RecordsofChannel.vue';
  import TheFooter from './components/TheFooter.vue';

  export default {  
    name: 'App',
    components: {
      HomePage,
      DemoPage,
      RecordsofChannel,
      TheFooter
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
    margin: -8px;
  }
</style>
