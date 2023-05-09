import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1683658464598 implements MigrationInterface {
    name = 'Initial1683658464598'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "doctors" ("id" SERIAL NOT NULL, "fullname" character varying NOT NULL, "amenity" character varying NOT NULL, CONSTRAINT "PK_8207e7889b50ee3695c2b8154ff" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "order" ("order_id" SERIAL NOT NULL, "serviceName" character varying NOT NULL, "price" integer NOT NULL, "doctorName" character varying NOT NULL, "patientName" character varying NOT NULL, "amenityAmenityId" integer, "doctorId" integer, "patientPatientId" integer, CONSTRAINT "PK_58998c5eaeaacdd004dec8b5d86" PRIMARY KEY ("order_id"))`);
        await queryRunner.query(`CREATE TABLE "amenities" ("doctor_id" integer NOT NULL, "amenity_id" integer NOT NULL, CONSTRAINT "PK_5a8f0df7984d47c3bfe8df15f1a" PRIMARY KEY ("doctor_id", "amenity_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_8013ee3c3b9c7099b7a3cacf43" ON "amenities" ("doctor_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_ea2b9239676a092e88ebd9772b" ON "amenities" ("amenity_id") `);
        await queryRunner.query(`ALTER TABLE "doctors" DROP CONSTRAINT "PK_8207e7889b50ee3695c2b8154ff"`);
        await queryRunner.query(`ALTER TABLE "doctors" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "doctors" DROP COLUMN "fullname"`);
        await queryRunner.query(`ALTER TABLE "doctors" DROP COLUMN "amenity"`);
        await queryRunner.query(`ALTER TABLE "doctors" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "doctors" ADD CONSTRAINT "PK_8207e7889b50ee3695c2b8154ff" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "doctors" ADD "fullname" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "doctors" ADD "amenity" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "doctors" ADD "amenity_id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "doctors" DROP CONSTRAINT "PK_8207e7889b50ee3695c2b8154ff"`);
        await queryRunner.query(`ALTER TABLE "doctors" ADD CONSTRAINT "PK_588567194c8d6794a816ab26840" PRIMARY KEY ("id", "amenity_id")`);
        await queryRunner.query(`ALTER TABLE "doctors" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "doctors" ADD "cost" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "doctors" ADD "doctor_id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "doctors" ADD "patient_id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "doctors" DROP CONSTRAINT "PK_588567194c8d6794a816ab26840"`);
        await queryRunner.query(`ALTER TABLE "doctors" ADD CONSTRAINT "PK_85ecd1aeeb8db790769cea8d2a4" PRIMARY KEY ("id", "amenity_id", "patient_id")`);
        await queryRunner.query(`ALTER TABLE "doctors" ADD "age" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "doctors" ADD "mail" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "doctors" DROP CONSTRAINT "PK_85ecd1aeeb8db790769cea8d2a4"`);
        await queryRunner.query(`ALTER TABLE "doctors" ADD CONSTRAINT "PK_534c7f399a040081a77aeed5e80" PRIMARY KEY ("amenity_id", "doctor_id")`);
        await queryRunner.query(`ALTER TABLE "doctors" DROP CONSTRAINT "PK_5ff22a1f1f43e68891d7c844c58"`);
        await queryRunner.query(`ALTER TABLE "doctors" ADD CONSTRAINT "PK_85ecd1aeeb8db790769cea8d2a4" PRIMARY KEY ("id", "amenity_id", "patient_id")`);
        await queryRunner.query(`ALTER TABLE "doctors" ALTER COLUMN "amenity_id" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "doctors_amenity_id_seq"`);
        await queryRunner.query(`ALTER TABLE "doctors" DROP COLUMN "doctor_id"`);
        await queryRunner.query(`ALTER TABLE "doctors" ADD "doctor_id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "doctors" DROP CONSTRAINT "PK_85ecd1aeeb8db790769cea8d2a4"`);
        await queryRunner.query(`ALTER TABLE "doctors" ADD CONSTRAINT "PK_5ff22a1f1f43e68891d7c844c58" PRIMARY KEY ("id", "amenity_id", "patient_id", "doctor_id")`);
        await queryRunner.query(`CREATE INDEX "IDX_88f79d1569191483aa75d95209" ON "doctors" ("amenity_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_24821d9468276ddc40107fc081" ON "doctors" ("doctor_id") `);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_32e7c67c582e35d294ac8f5389c" FOREIGN KEY ("amenityAmenityId") REFERENCES "doctors"("amenity_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_0bedf380608d5df339811e50a86" FOREIGN KEY ("doctorId") REFERENCES "doctors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_c1f57dbad38d625a1c7114e369a" FOREIGN KEY ("patientPatientId") REFERENCES "doctors"("patient_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "amenities" ADD CONSTRAINT "FK_8013ee3c3b9c7099b7a3cacf43f" FOREIGN KEY ("doctor_id") REFERENCES "doctors"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "amenities" ADD CONSTRAINT "FK_ea2b9239676a092e88ebd9772bc" FOREIGN KEY ("amenity_id") REFERENCES "doctors"("amenity_id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "doctors" ADD CONSTRAINT "FK_88f79d1569191483aa75d952097" FOREIGN KEY ("amenity_id") REFERENCES "doctors"("amenity_id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "doctors" ADD CONSTRAINT "FK_24821d9468276ddc40107fc0819" FOREIGN KEY ("doctor_id") REFERENCES "doctors"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "doctors" DROP CONSTRAINT "FK_24821d9468276ddc40107fc0819"`);
        await queryRunner.query(`ALTER TABLE "doctors" DROP CONSTRAINT "FK_88f79d1569191483aa75d952097"`);
        await queryRunner.query(`ALTER TABLE "amenities" DROP CONSTRAINT "FK_ea2b9239676a092e88ebd9772bc"`);
        await queryRunner.query(`ALTER TABLE "amenities" DROP CONSTRAINT "FK_8013ee3c3b9c7099b7a3cacf43f"`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_c1f57dbad38d625a1c7114e369a"`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_0bedf380608d5df339811e50a86"`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_32e7c67c582e35d294ac8f5389c"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_24821d9468276ddc40107fc081"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_88f79d1569191483aa75d95209"`);
        await queryRunner.query(`ALTER TABLE "doctors" DROP CONSTRAINT "PK_5ff22a1f1f43e68891d7c844c58"`);
        await queryRunner.query(`ALTER TABLE "doctors" ADD CONSTRAINT "PK_85ecd1aeeb8db790769cea8d2a4" PRIMARY KEY ("id", "amenity_id", "patient_id")`);
        await queryRunner.query(`ALTER TABLE "doctors" DROP COLUMN "doctor_id"`);
        await queryRunner.query(`ALTER TABLE "doctors" ADD "doctor_id" character varying NOT NULL`);
        await queryRunner.query(`CREATE SEQUENCE IF NOT EXISTS "doctors_amenity_id_seq" OWNED BY "doctors"."amenity_id"`);
        await queryRunner.query(`ALTER TABLE "doctors" ALTER COLUMN "amenity_id" SET DEFAULT nextval('"doctors_amenity_id_seq"')`);
        await queryRunner.query(`ALTER TABLE "doctors" DROP CONSTRAINT "PK_85ecd1aeeb8db790769cea8d2a4"`);
        await queryRunner.query(`ALTER TABLE "doctors" ADD CONSTRAINT "PK_5ff22a1f1f43e68891d7c844c58" PRIMARY KEY ("id", "amenity_id", "doctor_id", "patient_id")`);
        await queryRunner.query(`ALTER TABLE "doctors" DROP CONSTRAINT "PK_534c7f399a040081a77aeed5e80"`);
        await queryRunner.query(`ALTER TABLE "doctors" ADD CONSTRAINT "PK_85ecd1aeeb8db790769cea8d2a4" PRIMARY KEY ("id", "amenity_id", "patient_id")`);
        await queryRunner.query(`ALTER TABLE "doctors" DROP COLUMN "mail"`);
        await queryRunner.query(`ALTER TABLE "doctors" DROP COLUMN "age"`);
        await queryRunner.query(`ALTER TABLE "doctors" DROP CONSTRAINT "PK_85ecd1aeeb8db790769cea8d2a4"`);
        await queryRunner.query(`ALTER TABLE "doctors" ADD CONSTRAINT "PK_588567194c8d6794a816ab26840" PRIMARY KEY ("id", "amenity_id")`);
        await queryRunner.query(`ALTER TABLE "doctors" DROP COLUMN "patient_id"`);
        await queryRunner.query(`ALTER TABLE "doctors" DROP COLUMN "doctor_id"`);
        await queryRunner.query(`ALTER TABLE "doctors" DROP COLUMN "cost"`);
        await queryRunner.query(`ALTER TABLE "doctors" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "doctors" DROP CONSTRAINT "PK_588567194c8d6794a816ab26840"`);
        await queryRunner.query(`ALTER TABLE "doctors" ADD CONSTRAINT "PK_8207e7889b50ee3695c2b8154ff" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "doctors" DROP COLUMN "amenity_id"`);
        await queryRunner.query(`ALTER TABLE "doctors" DROP COLUMN "amenity"`);
        await queryRunner.query(`ALTER TABLE "doctors" DROP COLUMN "fullname"`);
        await queryRunner.query(`ALTER TABLE "doctors" DROP CONSTRAINT "PK_8207e7889b50ee3695c2b8154ff"`);
        await queryRunner.query(`ALTER TABLE "doctors" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "doctors" ADD "amenity" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "doctors" ADD "fullname" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "doctors" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "doctors" ADD CONSTRAINT "PK_8207e7889b50ee3695c2b8154ff" PRIMARY KEY ("id")`);
        await queryRunner.query(`DROP INDEX "public"."IDX_ea2b9239676a092e88ebd9772b"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_8013ee3c3b9c7099b7a3cacf43"`);
        await queryRunner.query(`DROP TABLE "amenities"`);
        await queryRunner.query(`DROP TABLE "order"`);
        await queryRunner.query(`DROP TABLE "doctors"`);
    }

}
