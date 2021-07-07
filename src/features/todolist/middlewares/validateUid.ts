import express from "express";
import { TodoList } from "../../../core/data/database/entities/TodoList";
import { User } from "../../../core/data/database/entities/User";

async function validatePassword(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  const { password } = req.body;

  //console.log("valid Name Middleware");
  const { uid } = req.params;

    const exist = await TodoList.findOne(uid);
    if (!exist) {
      return res.status(404).json({
        msg: "Item não encontrado",
      });
    }

  next();
}

export { validatePassword };
