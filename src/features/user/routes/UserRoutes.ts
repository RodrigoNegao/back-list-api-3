import { Router } from "express";
import UserController from "../controllers/UserController";
import { validateExistPassword, validatePassword } from "../middlewares/validatePassword";
import { validateExistUser, validateNotExistUser, validateUser } from "../middlewares/validateUser";

export default class UserRoutes {

    public init(): Router {

        const routes = Router();

        const userController = new UserController;
        routes.post('/login',[validateNotExistUser,validateExistPassword, validatePassword], userController.login); //TODO'/categorias', colocar Middleware
        routes.post('/signin',[validateUser,validateExistPassword,validateExistUser], userController.store);
        // TODO colocar Middleware
        //routes.put('/user/:id', userController.update);
        //routes.delete('/user/:id', userController.delete);

        return routes;
    }
}