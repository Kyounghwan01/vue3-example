import { createStore } from "vuex";
import { Counter, CounterState } from "@/store/modules/Counter";
import { moduleA, ModuleAState } from "@/store/modules/Test";

export interface RootState {
  ModuleA: ModuleAState;
  Counter: CounterState;
}

export default createStore({
  modules: { Counter, moduleA }
});
