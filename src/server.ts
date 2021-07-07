import cors from "cors";
import express, { Request, Response } from "express";
import "reflect-metadata";
import Database from "./core/data/connections/Database";
import TodoListRoutes from "./features/todolist/routes/TodoListRoutes";
import UserRoutes from "./features/user/routes/UserRoutes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (request: Request, response: Response) => {
  return response.send("OK");
});

const userRoutes = new UserRoutes().init();
const todolistRoutes = new TodoListRoutes().init();


app.use(userRoutes);
app.use(todolistRoutes);


const init = (() => new Database()
  .openConnection()
  .then(() =>
    app.listen(process.env.PORT || 8080, () => console.log("Servidor iniciado"))
  ));

init();