import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateTableTODOList1625509770740 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'lista1.todo_list',
            columns:[
                {
                    name:'id',
                    type:'serial',
                    isPrimary:true,
                    isNullable:false
                },
                {
                    name:'title',
                    type:'varchar',
                    length:'50',
                    isNullable:false
                },
                {
                    name:'detail',
                    type:'varchar',
                    length:'200'
                },
                {
                    name:'id_user',
                    type:'int',
                }
            ]
        }));
        await queryRunner.createForeignKey(
            "lista1.todo_list",
            new TableForeignKey({
            columnNames: ["id_user"],
            referencedColumnNames: ["uid"],
            referencedTableName: "lista1.users",
            onDelete: "CASCADE",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('lista1.todo_list');
    }

}
