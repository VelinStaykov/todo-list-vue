<template>
  <div id="app">
    <AddTodo />
    <TodoList />
    <TodoFilters />
  </div>
</template>

<script>
import AddTodo from './Components/AddTodo';
import TodoList from './Components/TodoList';
import TodoFilters from './Components/TodoFilters';
import { store } from './Store/store';

export default {
  name: 'App',
  store,
  components: {
    AddTodo,
    TodoList,
    TodoFilters
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
