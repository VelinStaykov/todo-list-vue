<template>
    <div class="todo-item">
        <input
            type="checkbox"
            v-model="todo.completed"
            v-on:click="toggleTodo(todo)"
        />
        <p
            class="todo-item-text"
            v-bind:class="{ 'completed-todo': todo.completed}"
        >
            {{ todo.text }}
        </p>
        <div 
            class="todo-item-buttons" 
        >
            <button
                class="button remove-button"
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

<style scoped>
    .todo-item {
        display: flex;
        justify-content: flex-start; 
        align-items: center;
        padding: 20px;
        width: 400px;
        border-bottom: 1px solid #cecece;
        border-top: 1px solid #cecece;
        font-weight: 100;
        font-size: 15px;
        color: #333333;
    }

    .todo-item-text {
        font-size: 20px;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    }
    .todo-item-buttons {
        margin-left: auto;
        display: flex;
    }

    .edit-button {
        flex: 1;
        margin-right: 5px;
    }

    .remove-button {
        background-color: rgba(255, 0, 0, 0.712);
    }

    .remove-button:hover {
        background-color: red;
    }

    .todo-button {
        margin-left: auto;
    }

    .todo-item-text.completed-todo {
        text-decoration: line-through;
        color: grey;
    }

    input[type=checkbox] {
        margin-right: 10px;
        font-size: 30px;
    }

    input[type=checkbox]:focus {
        outline: 0;
    }

</style>