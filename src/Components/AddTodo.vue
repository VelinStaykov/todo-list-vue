<template>
  <div>
    <input v-bind:value="text" v-on:input="text = $event.target.value" />
    <button v-on:click="addTodo(text)">Add Todo</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "AddTodo",
  data: function () {
    return {
      text: this.text,
    };
  },
    methods: {
        ...mapActions([
            "addTodo"
    ])
        
  },
};
</script>

<style lang="scss" scoped>
</style>