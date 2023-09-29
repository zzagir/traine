import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addTodo, (state, action) => {
        state.todos.push({
          id: new Date().toISOString(),
          text: action.payload,
          completed: false,
        });
      })
      .addCase(removeTodo, (state, action) => {
        state.todos = state.todos.filter(
          (todo) => todo.id !== action.payload.id
        );
      })
      .addCase(toggleTodo, (state, action) => {
        const toggledTodo = state.todos.find(
          (todo) => todo.id === action.payload.id
        );
        toggledTodo.completed = !toggledTodo.completed;
      });
  },
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
