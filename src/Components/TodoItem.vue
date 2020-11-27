<template>
    <div>
        <input
              type="checkbox"
              v-model="todo.completed"
              v-on:click="toggleTodo(todo)"
            />
            <p>
                {{ todo.text }}
            </p>
            <div>
                <button
                    v-on:click="removeTodo(todo.id)"
                >
                    Remove
                </button>
            </div>
    </div>
</template>

<script>

import { mapActions } from 'vuex';

    export default {
        name: 'TodoItem',
        props: ['todo'],
        methods: mapActions([
            'removeTodo',
            'toggleTodo'
        ]),
    }
</script>

<style lang="scss" scoped>

</style>