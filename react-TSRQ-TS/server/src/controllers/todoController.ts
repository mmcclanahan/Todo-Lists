//import models and make controller functions that will
//manipulate the db using the modelsfor each request here
//could split each one into seperate files too

//can make todo.find bla bla bla in a different file and import models instead of the object itself
//selectsends back only selected fields when created
import { Request, Response } from "express";
import prisma from "../models";

export const getTodos = async (req: Request, res: Response) => {
  try {
    const todos = await prisma.todos.findMany();
    res.status(200).send(todos);
  } catch (err) {
    res.status(500).send("Failed to get todos:" + err);
  }
};

export const createTodos = async (req: Request, res: Response) => {
  try {
    const { text, completed }: { text: string; completed: boolean } = req.body;
    const newTodo = await prisma.todos.create({
      data: {
        completed,
        text,
      },
    });
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: "Failed to create todo" });
  }
};
