import { Router } from "express";
import TodoListController from "../controllers/TodoListController";

export default class TodoListRoutes {

    public init(): Router {

        const routes = Router();

        const todoListController = new TodoListController
        routes.get('/messages', todoListController.show);
        routes.post('/message', todoListController.store);
        routes.put('/message/:uid', todoListController.update);
        routes.delete('/message/:uid', todoListController.delete);
        
        return routes;
    }
}