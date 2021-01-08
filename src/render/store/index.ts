import { createStore } from 'vuex';
import getters from './getters';
import example from './modules/example';

export default createStore({
  getters,
  modules: { example },
});
