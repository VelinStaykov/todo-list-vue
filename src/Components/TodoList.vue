<template>
  <div>
    <div v-for="todo in getFilteredTodos" :key="todo.id">
      <TodoItem v-bind:todo="todo" />
    </div>
  </div>
</template>

<script>

import { mapState, mapActions, mapGetters} from 'vuex'
import TodoItem from './TodoItem'

    export default {
        name: 'Todolist',
        components: {
            TodoItem
        },
        computed: {
            ...mapState({
                todos: state => state.todos.todos
            }),
            ...mapGetters([
                'getFilteredTodos'
            ])
        },
        methods: {
            ...mapActions([
                'setTodos'
           ])
        },
        mounted: function () {
            this.setTodos()
        }
    }
</script>

<style lang="scss" scoped>
</style>