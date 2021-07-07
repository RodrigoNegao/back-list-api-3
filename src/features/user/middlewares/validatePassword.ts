import express from "express";
import { User } from "../../../core/data/database/entities/User";

async function validatePassword(
  request: express.Request,
  response: express.Response,
  next: express.NextFunction
) {
  const { password } = request.body;

  //console.log("valid Name Middleware");
  const exist = await User.findOne({password:password});
  if (!exist) {
    return response.status(400).json({
      msg: "Password dever ser informado corretamente",
    });
  }

  next();
}

export { validatePassword };
