var express = require("express");
var router = express.Router();

var todos = require("../controller/todosController");

router.get("/", todos.getTodos);

router.get("/:todoId", todos.getTodoById);

router.post("/", todos.createTodo);
router.put("/:todoId", todos.updateTodo);
router.delete("/:todoId", todos.deleteTodo);
// router.get("/download", (req, res) => {
//   res.download("./public/download/data.txt");
// });

// router.get("/home", (req, res) => {
//   res.redirect("/");
// });

module.exports = router;
