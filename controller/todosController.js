const todoService = require("../service/todoService");

async function getTodos(req, res) {
  res.json(await todoService.getTodos());
}

async function getTodoById(req, res) {
  const todoId = req.params["todoId"];
  try {
    let todo = await todoService.getTodoById(todoId);
    if (!todo) {
      res.status(400).json({
        error: "ToDo not found",
      });
    }
    res.json(todo);
  } catch (e) {
    res.status(400).json({
      error: "ToDo not found",
    });
  }
}

async function createTodo(req, res) {
  const todo = req.body;
  try {
    let newTodo = await todoService.createTodo(todo);
    if (newTodo) {
      res.json(newTodo);
    }
  } catch (e) {
    res.status(400).json({
      error: "Error occurred",
    });
  }
}

async function updateTodo(req, res) {
  let todoId = req.params["todoId"];
  let todo = req.body;
  try {
    let updatedTodo = await todoService.updateTodo(todoId, todo);
    res.json(updatedTodo);
  } catch (e) {
    res.status(400).json({
      error: "Error occurred",
    });
  }
}

async function deleteTodo(req, res) {
  let todoId = req.params["todoId"];
  try {
    let todo = await todoService.deleteTodo(todoId);
    res.json(todo);
  } catch (e) {
    res.status(400).json({
      error: "Error Occurred",
    });
  }
}

module.exports = {
  getTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};
