import { database } from "../Config/firebaseConfig";

import { v4 as uuid } from "uuid";

export const todosModule = {
    state: {
        todos: [],
      },
      mutations: {
        setTodos(state, todos) {
          
          state.todos = todos;
        },
      },
      actions: {
        setTodos: ({ commit }) => {
          database.collection("todos").onSnapshot((querySnapshot) => {
            const dbTodos = [];
    
            querySnapshot.forEach((document) => {
              const { text, completed } = document.data();
    
              const todo = {
                id: document.id,
                text: text,
                completed: completed,
              };
              dbTodos.push(todo);
            });
            
            commit("setTodos", dbTodos);
          });
        },
        addTodo: (context, text) => {
          const todo = {
            id: uuid(),
            text: text,
            completed: false,
          };
    
          database
            .collection("todos")
            .doc(`${todo.id}`)
            .set({
              text: todo.text,
              completed: todo.completed,
            });
        },
        removeTodo: (context, id) => {
            database.collection("todos").doc(id).delete();
        },
        toggleTodo: (context, todo) => {
            database.collection("todos").doc(todo.id).update({ completed: !todo.completed });
        }
      }
}