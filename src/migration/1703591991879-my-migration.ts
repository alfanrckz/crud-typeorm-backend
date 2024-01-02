import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1703591991879 implements MigrationInterface {
    name = 'MyMigration1703591991879'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "regional-datas" RENAME COLUMN "province" TO "name"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "regional-datas" RENAME COLUMN "name" TO "province"`);
    }

}
