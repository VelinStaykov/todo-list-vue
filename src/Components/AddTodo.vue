<template>
  <header class="todo-header">
    <input 
        type="text"
        placeholder="Add a new todo"
        v-bind:value="text" 
        v-on:input="text = $event.target.value" 
    />
    <button 
        class="button input-button"
        v-on:click="handleAdd(text)"
    >
        Add Todo
    </button>
    <p 
        class="error"
        v-if="error"
    >
        You must add text.
    </p>
  </header>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddTodo",
  data: function () {
    return {
      text: "",
      error: false
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    handleAdd: function(text) {
      if (this.text === '') {
          this.setErrorVisibility(true)
          return;
      }
      
      this.addTodo(text);
      
      this.text = "";
      this.setErrorVisibility(false)
    },
    setErrorVisibility: function(boolean) {
        return this.error = boolean
    }
  },
};
</script>

<style scoped>
    .todo-header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 10px;
    }

    .input-button {
        width: 200px;
        margin: 5px;
    }

</style>