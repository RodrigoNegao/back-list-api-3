import express from "express";
import { User } from "../../../core/data/database/entities/User";

async function validateUser(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  const { user } = req.body;

  //console.log("valid Name Middleware ");

  if (!user) {
    return res.status(400).json({
      msg: "O nome deve ser informado",
    });
  }

  if (user.length < 3) {
    return res.status(400).json({
      msg: "O nome deve conter no minimo 3 caracteres",
    });
  }

  next();
}

async function validateExistUser(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  const { user } = req.body;

  const exist = await User.findOne({user:user});
  if (exist) {
      return res.status(404).json({msg:"Email já existe"});
    }
  next();
}

async function validateNotExistUser(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  const { user } = req.body;

  const exist = await User.findOne({user:user});
  if (!exist) {
      return res.status(404).json({msg:"Nenhum User encontrada"});
    }
  next();
}


function validarPassword(
  request: express.Request,
  response: express.Response,
  next: express.NextFunction
) {
  const { password } = request.body;

  //console.log("valid Name Middleware");

  if (!password) {
    return response.status(400).json({
      msg: "Password dever ser informado corretamente",
    });
  }

  next();
}

export {  validateUser, validateExistUser, validateNotExistUser, validarPassword };
