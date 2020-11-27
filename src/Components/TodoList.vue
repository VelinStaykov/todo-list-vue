<template>
  <div>
    <div v-for="todo in todos" :key="todo.id">
      <TodoItem v-bind:todo="todo" />
    </div>
  </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'
import TodoItem from './TodoItem'

    export default {
        name: 'Todolist',
        components: {
            TodoItem
        },
        computed: mapState({
            todos: state => state.todos.todos
        }),
        methods: mapActions([
            'setTodos'
        ]),
        mounted: function () {
            this.setTodos()
        }
    }
</script>

<style lang="scss" scoped>
</style>