<template>
  <div class="logo-box">
    <p>electron-vue</p>
    <img alt="logo" src="./assets/logo.png" />
  </div>
  <HelloWorld msg="Hello Electron 9.0 + Vue 3.0 + Vite1 +Typescript4" />
  <router-view></router-view>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  mounted() {
    this.$router.push('/page1');
  },
};
</script>

<style lang="scss">
body {
  text-align: center;
}
.logo-box {
  width: 100%;
  img {
    display: inline-block;
    width: 80%;
  }
  p {
    color: $blue;
    font-size: 20px;
  }
}
</style>
