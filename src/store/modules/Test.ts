import { Module } from "vuex";
import { RootState } from "../index";

export interface ModuleAState {
  count: number;
}

export const moduleA: Module<ModuleAState, RootState> = {
  namespaced: true,
  state: () => ({
    count: 0
  }),
  mutations: {
    increment(state: { count: number }) {
      // `state` is the local module state
      state.count++;
    }
  },
  getters: {
    // 모든 모듈 state 다들어감
    doubleCount(state, getters, rootState) {
      console.log(333, rootState.Counter.counter);
      return state.count * 2;
    }
  },
  actions: {
    incrementIfOddOnRootSum({ state, commit, rootState }) {
      if ((state.count + rootState.Counter.counter) % 2 === 1) {
        commit("increment");
      }
    },
    other({ dispatch }) {
      dispatch("test", null, { root: true });
    }
  }
};
