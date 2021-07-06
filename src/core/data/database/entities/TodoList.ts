import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from "typeorm";  
import UserRoutes from "../../../../features/user/routes/UserRoutes";
import { User } from "./User";
  
  @Entity({ name: "todo_list", schema:"lista1" })
  export class TodoList extends BaseEntity {
    @PrimaryGeneratedColumn({ name: "id" })
    uid?: number;
  
    @Column({ name: "title" })
    title: string;
  
    @Column()
    detail: string;

    @Column()
    id_user: number;

    @ManyToOne(() => User, (users) => users.uid)
    @JoinColumn({ name: "id_user", referencedColumnName: "uid" })
     autor?: UserRoutes;

    constructor(title: string, detail: string, id_user: number, uid?:number) {
        super();
        this.title = title;
        this.detail = detail;
        this.uid = uid;
        this.id_user = id_user;
    }
  }