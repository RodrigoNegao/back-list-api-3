import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
  } from "typeorm";  
  
  @Entity({ name: "users", schema:"lista1" })
  export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    uid?: number;
  
    @Column({ name: "user" })
    user: string;
  
    @Column()
    senha: string;

    constructor(user: string, senha: string,uid?:number) {
        super();
        this.user = user;
        this.senha = senha;
        this.uid = uid;
    }
  }