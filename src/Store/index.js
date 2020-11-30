import Vue from "vue";
import Vuex from "vuex";

import { todosModule } from './Modules/todosModule';
import { filtersModule } from './Modules/filtersModule';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    todos: todosModule,
    filter: filtersModule
  },
  getters: {
        getFilteredTodos: state => {
            const filter = state.filter.filter
            const todos = state.todos.todos

            switch (filter) {
                case 'completed':
                    return todos.filter(todo => todo.completed);
                case 'active':
                    return todos.filter(todo => !todo.completed);
                default:
                    return todos;
        }
    }
  }
});
