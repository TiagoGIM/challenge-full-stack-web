import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createStudent1604371092068 implements MigrationInterface {


    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
          name:'students',
          columns:[
            {
              name:'id',
              type:'integer',
              unsigned:true,
              isPrimary:true,
              isGenerated:true,
              generationStrategy:'increment'
            },
            {
              name:'name',
              type:'varchar',
            },
            {
              name:'cpf',
              type:'varchar',
            },
            {
              name:'email',
              type:'varchar',
            },
            {
              name:'ra',
              type:"varchar",
            }
          ],
        }));    
      }
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("students");
      }

}
