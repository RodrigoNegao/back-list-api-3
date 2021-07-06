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
    @PrimaryGeneratedColumn()
    uid?: number;
  
    @Column({ name: "descricao" })
    descricao: string;
  
    @Column()
    detalhamento: string;

    @Column()
    id_user: number;

    @ManyToOne(() => User, (users) => users.uid)
    @JoinColumn({ name: "id_autor", referencedColumnName: "uid" })
     autor?: UserRoutes;

    constructor(descricao: string, detalhamento: string, id_user: number, uid?:number) {
        super();
        this.descricao = descricao;
        this.detalhamento = detalhamento;
        this.uid = uid;
        this.id_user = id_user;
    }
  }