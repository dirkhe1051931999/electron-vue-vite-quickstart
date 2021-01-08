<template>
  <div>
    <input type="text" :placeholder="placeholder" @input="input" v-model="inputData" />
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick, ref } from 'vue';

export default {
  name: 'input1',
  props: {
    height: Number,
    placeholder: {
      type: String,
      default: 'please enter something',
      required: true,
      validator: (value: string) => {
        return value !== 'hello';
      },
    },
  },
  setup(props, { emit }) {
    function input(value: string) {
      emit('input', inputData);
    }
    function sayHello() {
      console.log('hello');
    }
    let inputData = ref('');
    return {
      inputData,
      props,
      input,
    };
  },
};
</script>

<style scoped>
</style>