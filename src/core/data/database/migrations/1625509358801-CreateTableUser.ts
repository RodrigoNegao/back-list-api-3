import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableUser1625509358801 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'lista1.users',
            columns:[
                {
                    name:'uid',
                    type:'serial',
                    isPrimary:true,
                    isNullable:false
                },
                {
                    name:'user',
                    type:'varchar',
                    length:'50',
                    isNullable:false,
                    isUnique:true,
                },
                {
                    name:'password',
                    type:'varchar',
                    length:'50',
                    isNullable:false
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('lista1.users');
    }

}
