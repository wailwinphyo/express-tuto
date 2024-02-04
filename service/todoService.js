let Todos = require("../model/todo");

async function getTodos() {
  return Todos.find();
}

async function getTodoById(todoId) {
  return Todos.findById(todoId);
}

async function createTodo(todo) {
  let newTodo = new Todos(todo);
  return newTodo.save();
}
async function updateTodo(todoId, todo) {
  let updatedTodo = await Todos.findByIdAndUpdate(todoId, todo, { new: true });
  console.log("Update todo" + todoId);
  return updatedTodo;
}
async function deleteTodo(todoId) {
  return await Todos.findByIdAndDelete(todoId);
}

module.exports = {
  getTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};
