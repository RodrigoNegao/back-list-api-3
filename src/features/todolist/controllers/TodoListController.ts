import { Request, Response } from "express";
import { TodoList } from "../../../core/data/database/entities/TodoList";
//import { v4 } from "uuid";

//Tips Find - https://orkhan.gitbook.io/typeorm/docs/find-options

export default class TodoListController {
  public async store(req: Request, res: Response) {
    //add id_user//
    const { title, detail, id_user } = req.body;

    try {
      const entity = await new TodoList(title, detail, id_user).save();

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
    const { id_user } = req.params;
    //const id_user: number = parseInt(id_user_params)
    const todolist = await TodoList.find({ where: { id_user: id_user } });
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
    const { id_user, uid } = req.params;

    const todolist = await TodoList.findOne({
      where: { uid: uid, id_user: id_user },
    });

    if (!todolist) {
      return res.status(404).json({ msg: "Nenhuma Mensagem encontrada" });
    }

    // category.remove() ou
    const result = await TodoList.delete(uid);

    return res
      .status(200)
      .json(
        (result.affected as number) > 0 ? "Excluiu Messagem" : "Não Excluiu"
      );
  }

  public async update(req: Request, res: Response) {
    const { uid } = req.params;
    const { title, detail } = req.body;
    
    const result = await TodoList.update(uid, {
      title,
      detail,
    });

    return res
      .status(200)
      .json(
        (result.affected as number) > 0 ? "Atualizou Messagem" : "Não Atualizou"
      );
  }
}
