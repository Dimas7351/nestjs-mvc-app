import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1685144242821 implements MigrationInterface {
    name = 'Initial1685144242821'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "patients" ("id" SERIAL NOT NULL, "fullname" character varying NOT NULL, "age" integer NOT NULL, "mail" character varying NOT NULL, CONSTRAINT "UQ_a7f0b9fcbb3469d5ec0b0aceaa7" UNIQUE ("id"), CONSTRAINT "PK_a7f0b9fcbb3469d5ec0b0aceaa7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "orders" ("id" SERIAL NOT NULL, "price" integer NOT NULL, "amenity" integer, "doctor" integer, "patient" integer, CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "amenities" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "cost" character varying NOT NULL, CONSTRAINT "UQ_c0777308847b3556086f2fb233e" UNIQUE ("id"), CONSTRAINT "PK_c0777308847b3556086f2fb233e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "doctors" ("id" SERIAL NOT NULL, "fullname" character varying NOT NULL, CONSTRAINT "UQ_8207e7889b50ee3695c2b8154ff" UNIQUE ("id"), CONSTRAINT "PK_8207e7889b50ee3695c2b8154ff" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "doctors_amenities" ("amenity_id" integer NOT NULL, "doctor_id" integer NOT NULL, CONSTRAINT "PK_1bc28384aa69f9a83a8c8827b71" PRIMARY KEY ("amenity_id", "doctor_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_9fe836112a6d0c49a24ff31af2" ON "doctors_amenities" ("amenity_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_95e7f1b30f2837f101f191cd5a" ON "doctors_amenities" ("doctor_id") `);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_78deb0ed88acfbcdc1be0b44c6e" FOREIGN KEY ("amenity") REFERENCES "amenities"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_1b9b82c944a58966eac191078b2" FOREIGN KEY ("doctor") REFERENCES "doctors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_74e8f55f3496bcfd9bd3eb75c5f" FOREIGN KEY ("patient") REFERENCES "patients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "doctors_amenities" ADD CONSTRAINT "FK_9fe836112a6d0c49a24ff31af2d" FOREIGN KEY ("amenity_id") REFERENCES "amenities"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "doctors_amenities" ADD CONSTRAINT "FK_95e7f1b30f2837f101f191cd5ae" FOREIGN KEY ("doctor_id") REFERENCES "doctors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "doctors_amenities" DROP CONSTRAINT "FK_95e7f1b30f2837f101f191cd5ae"`);
        await queryRunner.query(`ALTER TABLE "doctors_amenities" DROP CONSTRAINT "FK_9fe836112a6d0c49a24ff31af2d"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_74e8f55f3496bcfd9bd3eb75c5f"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_1b9b82c944a58966eac191078b2"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_78deb0ed88acfbcdc1be0b44c6e"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_95e7f1b30f2837f101f191cd5a"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_9fe836112a6d0c49a24ff31af2"`);
        await queryRunner.query(`DROP TABLE "doctors_amenities"`);
        await queryRunner.query(`DROP TABLE "doctors"`);
        await queryRunner.query(`DROP TABLE "amenities"`);
        await queryRunner.query(`DROP TABLE "orders"`);
        await queryRunner.query(`DROP TABLE "patients"`);
    }

}
