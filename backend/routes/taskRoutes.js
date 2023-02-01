const { getAllMainTask, addMainTask, removeTask, editTask } = require("../controllers/taskController")

const router = require("express").Router()

router
    .get("/", getAllMainTask)
    .post("/add", addMainTask)
    .put("/:taskId", editTask)
    .delete("/remove/:taskId", removeTask)

    module.exports = router