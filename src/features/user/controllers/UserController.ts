import { Request, Response } from "express";
import { User } from "../../../core/data/database/entities/User";

//import { v4 } from "uuid";

export default class UserController {
  public async store(req: Request, res: Response) {
    //addCategory
    const { user, password } = req.body;

    try {
      const entity = await new User(user, password).save();
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
    const { user, password } = req.body;
    
    const exist = await User.findOne({user:user, password:password});

    return res.json({id:exist?.uid});
  }

  public async show(req: Request, res: Response) {
    const { user } = req.body;

    const exist = await User.findOne(user);

    return res.status(200).json(exist);
  }

  public async delete(req: Request, res: Response) {
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
    const { user, password } = req.body;

    const result = await User.update(id, {
      user,
      password,
    });

    return res.json(result);
  }
}
