import {MigrationInterface, QueryRunner} from "typeorm";

export class first1574917477258 implements MigrationInterface {
    name = 'first1574917477258'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `firstName`", undefined);
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `lastName`", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD `name` varchar(255) NOT NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `name`", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD `lastName` varchar(255) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD `firstName` varchar(255) NOT NULL", undefined);
    }

}
