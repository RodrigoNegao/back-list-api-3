import { Request, Response } from "express";
import { TodoList } from "../../../core/data/database/entities/TodoList";
//import { v4 } from "uuid";

//Tips Find - https://orkhan.gitbook.io/typeorm/docs/find-options

export default class TodoListController {
  public async store(req: Request, res: Response) {
    //add id_user// 
    const { title,detail,id_user } = req.body;

    try {
      const entity = await new TodoList( title,detail, id_user).save();

      return res.status(200).json(entity);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  public async index(req: Request, res: Response) {
    //store
    const categories = await TodoList.find();

    return res.json(categories);
  }

  public async show(req: Request, res: Response) {
    //showCategory
    //const { uid, id_user }=  req.params;
    const { id_user } = req.body;  
    //const id_user: number = parseInt(id_user_params)
    const todolist = await TodoList.find({where:{id_user:id_user}})
    // const todolist = await TodoList.findOne({
    //   where: { uid, id_user },
    //   relations: ["user"],
    // });
    //const userTodolist = await TodoList.find({id_user:id_user});
    //const todolist = await userTodolist.findOne({uid:uid});

    if (!todolist) {
      return res.status(404).send("Nenhuma Lista encontrada");
    }

    return res.status(200).json(todolist);
  }

  public async delete(req: Request, res: Response) {
    //showCategory
    const { uid } = req.params;

    const todolist = await TodoList.findOne(uid);

    if (!todolist) {
      return res.status(404).send("Nenhuma Categoria encontrada");
    }

    // category.remove() ou
    const result = await TodoList.delete(uid);

    return res.status(200).json((result.affected as number) > 0
      ? "Excluiu Categoria"
      : "Não Excluiu");
  }

  public async update(req: Request, res: Response) {
    const { uid } = req.params
    const { title,detail  } = req.body;

    const exist = await TodoList.findOne(uid);
    if (!exist) {
      return res.status(404).json({
        msg: "descricao não encontrado",
      });
    }

    const result = await TodoList.update(uid, {
      title,detail
    });

    return res.json(result);
  }
}
