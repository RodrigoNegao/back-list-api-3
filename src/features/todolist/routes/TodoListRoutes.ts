import { Router } from "express";
import { validateUser } from "../../user/middlewares/validateUser";
import TodoListController from "../controllers/TodoListController";
import { validateUid } from "../middlewares/validateUid";

export default class TodoListRoutes {

    public init(): Router {

        const routes = Router();

        const todoListController = new TodoListController
        routes.get('/messages/:id_user', todoListController.show);
        routes.post('/message', todoListController.store);
        routes.put('/message/:id_user/:uid',[validateUid], todoListController.update);
        routes.delete('/message/:id_user/:uid',[validateUid], todoListController.delete);

        return routes;
    }
}