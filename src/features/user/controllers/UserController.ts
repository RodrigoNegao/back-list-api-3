import { Request, Response } from "express";
import { userInfo } from "os";
import { User } from "../../../core/data/database/entities/User";

//import { v4 } from "uuid";

export default class UserController {
  public async store(req: Request, res: Response) {
    //addCategory
    const { user, senha } = req.body;

    try {
      const entity = await new User(user, senha).save();
      return res.status(200).json(entity);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  // public async index(req: Request, res: Response) {
  //   //store
  //   const categories = await User.find();

  //   return res.json(categories);
  // }

  public async login(req: Request, res: Response) {
    const { user, senha } = req.body;
    const categories = await User.findOne({user:user, senha:senha});

    return res.json(categories);
  }

  public async show(req: Request, res: Response) {
    //showCategory
    const { uid } = req.params;

    const todolist = await User.findOne(uid);

    if (!todolist) {
      return res.status(404).send("Nenhuma Categoria encontrada");
    }

    return res.status(200).json(todolist);
  }

  public async delete(req: Request, res: Response) {
    //showCategory
    const { uid } = req.params;

    const todolist = await User.findOne(uid);

    if (!todolist) {
      return res.status(404).send("Nenhuma Categoria encontrada");
    }

    // category.remove() ou
    const result = await User.delete(uid);

    return res
      .status(200)
      .json(
        (result.affected as number) > 0 ? "Excluiu Categoria" : "Não Excluiu"
      );
  }

  public async update(req: Request, res: Response) {
    const { id } = req.params;
    const { user, senha } = req.body;

    const autor = await User.findOne(id);
    if (!user) {
      return res.status(404).json({
        msg: "user não encontrado",
      });
    }

    const result = await User.update(id, {
      user,
      senha,
    });

    return res.json(result);
  }
}
