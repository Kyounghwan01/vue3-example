import { Module } from "vuex";
import { RootState } from "../index";

export interface CounterState {
  counter: number;
}

export const Counter: Module<CounterState, RootState> = {
  namespaced: true,
  state: () => ({ counter: 10 }),
  mutations: {
    setCounter(state, value: number) {
      state.counter = value;
    }
  },
  actions: {
    //첫번째 객체는 스토어에서 사용하는 객체 다 사용가능(사용할꺼만 넣어주면됨)
    //ActionContext 타입의 두번째 타입은 RootState임. 현재는 State로 해도됨.
    //두번째 인자는 액션함수의 파라미터임.
    test: {
      // root: true,
      handler({ state, commit }) {
        // console.log(1, state);
        commit("setCounter", state.counter + 1);
        // state.counter = 100;
      }
    }
  },
  getters: {
    time2(state) {
      return state.counter * 2;
    }
  }
};
