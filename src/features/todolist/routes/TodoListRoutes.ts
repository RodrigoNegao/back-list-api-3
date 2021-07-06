import { Router } from "express";
import TodoListController from "../controllers/TodolistController";

export default class TodoListRoutes {

    public init(): Router {

        const routes = Router();

        const todoListController = new TodoListController
        routes.get('/todo_list', todoListController.show);
        routes.post('/todo_list', todoListController.store);
        routes.put('/todo_list/:id', todoListController.update);
        routes.delete('/todo_list/:id', todoListController.delete);
        
        return routes;
    }
}