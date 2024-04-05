import { MigrationInterface, QueryRunner } from "typeorm";

export class Test1712070589823 implements MigrationInterface {
    name = 'Test1712070589823'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "restaurant" ("id" SERIAL NOT NULL, "picture" character varying NOT NULL, "name" character varying NOT NULL, "address" character varying NOT NULL, "workHour" character varying NOT NULL, CONSTRAINT "PK_649e250d8b8165cb406d99aa30f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product" ("id" SERIAL NOT NULL, "picture" character varying NOT NULL, "name" character varying NOT NULL, "price" character varying NOT NULL, "category" character varying NOT NULL, "promoDescription" character varying NOT NULL, "promoPrice" character varying NOT NULL, "daysOfPromo" character varying NOT NULL, "restaurantId" integer, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_3249a5709fb37437198f7dff801" FOREIGN KEY ("restaurantId") REFERENCES "restaurant"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_3249a5709fb37437198f7dff801"`);
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`DROP TABLE "restaurant"`);
    }

}
