<template>
  <router-link to="/page1">Page1</router-link> |
  <router-link to="/page2">Page2</router-link>
  <p>{{ msg }}</p>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      count: 0,
    };
  },
};
</script>
