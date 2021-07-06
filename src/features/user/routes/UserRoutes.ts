import { Router } from "express";
import UserController from "../controllers/UserController";

export default class UserRoutes {

    public init(): Router {

        const routes = Router();

        const userController = new UserController;
        routes.post('/login', userController.login); //TODO'/categorias', colocar Middleware
        routes.post('/signin', userController.store);
        //routes.put('/user/:id', userController.update);
        //routes.delete('/user/:id', userController.delete);

        return routes;
    }
}