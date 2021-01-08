import { Module } from 'vuex';
const state = {
  count: 0,
};
const mutations = {
  // 记住密码相关功能
  PLUS_COUNT: (state: any): void => {
    state.count++;
  },
  // 记住密码相关功能
  MINUS_COUNT: (state: any): void => {
    state.count--;
  },
};
const actions = {
  plusCount: (ctx: any): void => {
    ctx.commit('PLUS_COUNT');
  },
  minusCount: (ctx: any): void => {
    ctx.commit('MINUS_COUNT');
  },
};
export default {
  state,
  mutations,
  actions,
  namespaced: true,
} as Module<object, any>;
