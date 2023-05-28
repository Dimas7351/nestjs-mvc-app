import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1685284942827 implements MigrationInterface {
    name = 'Initial1685284942827'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "doctors" ("id" SERIAL NOT NULL, "fullname" character varying NOT NULL, "specialization" character varying NOT NULL, CONSTRAINT "UQ_8207e7889b50ee3695c2b8154ff" UNIQUE ("id"), CONSTRAINT "PK_8207e7889b50ee3695c2b8154ff" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "patients" ("id" SERIAL NOT NULL, "fullname" character varying NOT NULL, "age" integer NOT NULL, "mail" character varying NOT NULL, CONSTRAINT "UQ_a7f0b9fcbb3469d5ec0b0aceaa7" UNIQUE ("id"), CONSTRAINT "PK_a7f0b9fcbb3469d5ec0b0aceaa7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "orders" ("id" SERIAL NOT NULL, "patientId" integer, CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "amenities" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "cost" integer NOT NULL, "doctorId" integer, CONSTRAINT "UQ_c0777308847b3556086f2fb233e" UNIQUE ("id"), CONSTRAINT "PK_c0777308847b3556086f2fb233e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "orders_amenities" ("order_id" integer NOT NULL, "amenity_id" integer NOT NULL, CONSTRAINT "PK_a08edf08b3967bb6ed30f1dec49" PRIMARY KEY ("order_id", "amenity_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_9630e9d56f7ac4c9ea38c15a7f" ON "orders_amenities" ("order_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_e8a8a3ff3201e6346ffaa0b92c" ON "orders_amenities" ("amenity_id") `);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_43121c180ee0c44e41b4a8e2dec" FOREIGN KEY ("patientId") REFERENCES "patients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "amenities" ADD CONSTRAINT "FK_ee117cadfd73ef16c0fdd07bee7" FOREIGN KEY ("doctorId") REFERENCES "doctors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders_amenities" ADD CONSTRAINT "FK_9630e9d56f7ac4c9ea38c15a7fc" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "orders_amenities" ADD CONSTRAINT "FK_e8a8a3ff3201e6346ffaa0b92cf" FOREIGN KEY ("amenity_id") REFERENCES "amenities"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders_amenities" DROP CONSTRAINT "FK_e8a8a3ff3201e6346ffaa0b92cf"`);
        await queryRunner.query(`ALTER TABLE "orders_amenities" DROP CONSTRAINT "FK_9630e9d56f7ac4c9ea38c15a7fc"`);
        await queryRunner.query(`ALTER TABLE "amenities" DROP CONSTRAINT "FK_ee117cadfd73ef16c0fdd07bee7"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_43121c180ee0c44e41b4a8e2dec"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e8a8a3ff3201e6346ffaa0b92c"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_9630e9d56f7ac4c9ea38c15a7f"`);
        await queryRunner.query(`DROP TABLE "orders_amenities"`);
        await queryRunner.query(`DROP TABLE "amenities"`);
        await queryRunner.query(`DROP TABLE "orders"`);
        await queryRunner.query(`DROP TABLE "patients"`);
        await queryRunner.query(`DROP TABLE "doctors"`);
    }

}
