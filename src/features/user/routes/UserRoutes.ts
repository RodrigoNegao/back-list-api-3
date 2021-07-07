import { Router } from "express";
import UserController from "../controllers/UserController";
import { validatePassword } from "../middlewares/validatePassword";
import { validateExistUser, validateNotExistUser, validateUser } from "../middlewares/validateUser";

export default class UserRoutes {

    public init(): Router {

        const routes = Router();

        const userController = new UserController;
        routes.post('/login',[validateNotExistUser,validatePassword], userController.login); //TODO'/categorias', colocar Middleware
        routes.post('/signin',[validateUser,validateExistUser], userController.store);
        //routes.put('/user/:id', userController.update);
        //routes.delete('/user/:id', userController.delete);

        return routes;
    }
}