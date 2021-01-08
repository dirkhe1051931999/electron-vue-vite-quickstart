<template>
  <h1 ref="title">Page1</h1>
  <div>
    <MyInput :height="20" placeholder="yes" @input="myInputInput" ref="myInput"></MyInput>
  </div>
  <p>name-> {{ name }}</p>
  <p>count-> {{ count }}</p>
  <p>bar->{{ bar }}</p>
  <p>game->{{ game }}</p>
  <p>shallowGame->{{ shallowGame }}</p>
  <p>copyGame->{{ copyGame }}</p>
  <button @click="add">加</button>
  <button @click="minus">减</button>
</template>

<script lang="ts">
import store from '../../store';
import getters from '../../store/getters';
import {
  defineComponent,
  computed,
  reactive,
  onMounted,
  onBeforeUnmount,
  ref,
  readonly,
  watchEffect,
  onUpdated,
  onUnmounted,
  shallowReactive,
  watch,
  defineAsyncComponent,
} from 'vue';
import MyInput from '/components/input.vue';
export default defineComponent({
  name: 'Page1',
  components: {
    MyInput,
  },
  setup() {
    const count = computed(() => store.getters.count);
    // 普通变量
    let name = 'jen';
    // 双向绑定
    let bar = ref('bar');
    // ref title
    let title = ref(null);
    // ref myInput
    let myInput = ref(null);
    // 立即监听的watch
    watchEffect((a) => {
      console.log(bar.value);
    });
    // 不会立即监听的watch
    watch(bar, (newVal, oldVal) => {
      console.log(newVal, oldVal);
    });
    // proxy深度代理
    const game: any = reactive({
      dice: 0,
      data: {
        age: 1,
      },
    });
    // proxy浅代理
    const shallowGame = shallowReactive({
      dice: 0,
      data: {
        age: 1,
      },
    });
    // 深拷贝
    const copyGame: any = JSON.parse(JSON.stringify(readonly(game)));
    // 加
    function add() {
      store.dispatch('example/plusCount');
      shallowGame.data.age++;
      shallowGame.dice = 10;
    }
    // 减
    function minus() {
      store.dispatch('example/minusCount');
      game.data.age++;
      game.dice++;
    }
    // 组件派发事件
    function myInputInput(value: string) {
      console.log('myInputInput', value);
    }
    onMounted(() => {
      // h1 标签
      console.log(title.value);
      // myInput 组件
      console.log(myInput.value);
      bar.value = 'foo';
      setTimeout(() => {
        name += ' he';
        console.log(name);
      }, 1000);
    });
    return {
      myInput,
      title,
      name,
      add,
      minus,
      count,
      bar,
      game,
      copyGame,
      shallowGame,
      myInputInput,
    };
  },
});
</script>