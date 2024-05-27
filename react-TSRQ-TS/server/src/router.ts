//routes requests to controllers
import express from "express";
//import controllers
import { getTodos, createTodos } from "./controllers/todoController";

const router = express.Router();

router.get("/todos", getTodos);
router.post("/todos", createTodos);

export default router;
