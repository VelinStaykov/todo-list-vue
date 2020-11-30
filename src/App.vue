<template>
  <div class="todo-list-app">
    <AddTodo />
    <TodoList />
    <TodoFilters />
  </div>
</template>

<script>
import AddTodo from './Components/AddTodo';
import TodoList from './Components/TodoList';
import TodoFilters from './Components/TodoFilters';
import { store } from './Store/index';

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
  .todo-list-app {
    background-color: white;
    margin: auto;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #efefef;
    box-shadow:
    /* The top layer shadow */
        0 1px 1px rgba(0,0,0,0.15),
            /* The second layer */
        0 10px 0 -5px #eee,
            /* The second layer shadow */
        0 10px 1px -4px rgba(0,0,0,0.15),
            /* The third layer */
        0 20px 0 -10px #eee,
            /* The third layer shadow */
        0 20px 1px -9px rgba(0,0,0,0.15);
    padding: 20px;
  }

  .button {
    display: inline-block;
    padding: 0.3em 1.2em;
    margin: 0 0.3em 0.3em 0;
    border-radius: 2em;
    box-sizing: border-box;
    text-decoration: none;
    font-family: 'Roboto',sans-serif;
    font-weight: 300;
    color: #FFFFFF;
    background-color: #4eb5f1;
    text-align: center;
    transition: all 0.2s;
    border: none;
  }

  .button:focus {
    outline: 0;
  }

  .button:hover{
    background-color:#4095c6;
  }

  input[type="text"] {
    font-family: Arial, Helvetica, sans-serif;
    width: 200px;
    border: solid black;
    border-width: 1px;
    padding: 10px;
    border-radius: 4px;
  }
  .error {
    color: red;
  }

</style>
