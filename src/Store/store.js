import Vue from "vue";
import Vuex from "vuex";

import { todosModule } from './todosModule';
import { filtersModule } from './filtersModule';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    todos: todosModule,
    filter: filtersModule
  }
});
