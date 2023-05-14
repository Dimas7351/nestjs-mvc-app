import { MigrationInterface, QueryRunner } from "typeorm";

export class Initialt1683672310446 implements MigrationInterface {
    name = 'Initialt1683672310446'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "amenities" DROP CONSTRAINT "FK_c0777308847b3556086f2fb233e"`);
        await queryRunner.query(`ALTER TABLE "amenities" DROP CONSTRAINT "FK_ea2b9239676a092e88ebd9772bc"`);
        await queryRunner.query(`ALTER TABLE "doctors" DROP CONSTRAINT "FK_00707f52ac6001ac36c7486b7e4"`);
        await queryRunner.query(`ALTER TABLE "doctors" DROP CONSTRAINT "FK_f6939226084cf69961d4d12ffa8"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_c0777308847b3556086f2fb233"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_ea2b9239676a092e88ebd9772b"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_00707f52ac6001ac36c7486b7e"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f6939226084cf69961d4d12ffa"`);
        await queryRunner.query(`ALTER TABLE "amenities" DROP CONSTRAINT "PK_096fc7a850c8fc8e1da4973c78a"`);
        await queryRunner.query(`ALTER TABLE "amenities" ADD CONSTRAINT "PK_c0777308847b3556086f2fb233e" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "amenities" DROP COLUMN "amenity_id"`);
        await queryRunner.query(`ALTER TABLE "doctors" DROP COLUMN "amenity"`);
        await queryRunner.query(`ALTER TABLE "doctors" DROP CONSTRAINT "PK_f44899ed4b44e34b65ce3c01073"`);
        await queryRunner.query(`ALTER TABLE "doctors" ADD CONSTRAINT "PK_f6939226084cf69961d4d12ffa8" PRIMARY KEY ("id_2")`);
        await queryRunner.query(`ALTER TABLE "doctors" DROP COLUMN "id_1"`);
        await queryRunner.query(`ALTER TABLE "doctors" DROP CONSTRAINT "PK_f6939226084cf69961d4d12ffa8"`);
        await queryRunner.query(`ALTER TABLE "doctors" DROP COLUMN "id_2"`);
        await queryRunner.query(`ALTER TABLE "doctors" DROP CONSTRAINT "UQ_8207e7889b50ee3695c2b8154ff"`);
        await queryRunner.query(`ALTER TABLE "doctors" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "doctors" DROP COLUMN "fullname"`);
        await queryRunner.query(`ALTER TABLE "amenities" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "amenities" DROP COLUMN "cost"`);
        await queryRunner.query(`ALTER TABLE "amenities" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "amenities" ADD "cost" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "doctors" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "doctors" ADD CONSTRAINT "PK_8207e7889b50ee3695c2b8154ff" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "doctors" ADD CONSTRAINT "UQ_8207e7889b50ee3695c2b8154ff" UNIQUE ("id")`);
        await queryRunner.query(`ALTER TABLE "doctors" ADD "fullname" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "doctors" ADD "id_1" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "doctors" DROP CONSTRAINT "PK_8207e7889b50ee3695c2b8154ff"`);
        await queryRunner.query(`ALTER TABLE "doctors" ADD CONSTRAINT "PK_bb6bc744294d70177d2ef74c62f" PRIMARY KEY ("id", "id_1")`);
        await queryRunner.query(`ALTER TABLE "doctors" ADD "id_2" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "doctors" DROP CONSTRAINT "PK_bb6bc744294d70177d2ef74c62f"`);
        await queryRunner.query(`ALTER TABLE "doctors" ADD CONSTRAINT "PK_42cd57286d4cfda1e439c37c938" PRIMARY KEY ("id", "id_1", "id_2")`);
        await queryRunner.query(`ALTER TABLE "amenities" ADD "amenity_id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "amenities" DROP CONSTRAINT "PK_c0777308847b3556086f2fb233e"`);
        await queryRunner.query(`ALTER TABLE "amenities" ADD CONSTRAINT "PK_096fc7a850c8fc8e1da4973c78a" PRIMARY KEY ("id", "amenity_id")`);
        await queryRunner.query(`ALTER TABLE "doctors" DROP CONSTRAINT "PK_42cd57286d4cfda1e439c37c938"`);
        await queryRunner.query(`ALTER TABLE "doctors" ADD CONSTRAINT "PK_f44899ed4b44e34b65ce3c01073" PRIMARY KEY ("id_1", "id_2")`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_9765e12c0270954df4ee2bf0218"`);
        await queryRunner.query(`CREATE SEQUENCE IF NOT EXISTS "amenities_id_seq" OWNED BY "amenities"."id"`);
        await queryRunner.query(`ALTER TABLE "amenities" ALTER COLUMN "id" SET DEFAULT nextval('"amenities_id_seq"')`);
        await queryRunner.query(`ALTER TABLE "amenities" DROP CONSTRAINT "UQ_c0777308847b3556086f2fb233e"`);
        await queryRunner.query(`CREATE INDEX "IDX_00707f52ac6001ac36c7486b7e" ON "doctors" ("id_1") `);
        await queryRunner.query(`CREATE INDEX "IDX_f6939226084cf69961d4d12ffa" ON "doctors" ("id_2") `);
        await queryRunner.query(`CREATE INDEX "IDX_c0777308847b3556086f2fb233" ON "amenities" ("id") `);
        await queryRunner.query(`CREATE INDEX "IDX_ea2b9239676a092e88ebd9772b" ON "amenities" ("amenity_id") `);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_9765e12c0270954df4ee2bf0218" FOREIGN KEY ("amenityId") REFERENCES "amenities"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "doctors" ADD CONSTRAINT "FK_00707f52ac6001ac36c7486b7e4" FOREIGN KEY ("id_1") REFERENCES "amenities"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "doctors" ADD CONSTRAINT "FK_f6939226084cf69961d4d12ffa8" FOREIGN KEY ("id_2") REFERENCES "doctors"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "amenities" ADD CONSTRAINT "FK_c0777308847b3556086f2fb233e" FOREIGN KEY ("id") REFERENCES "doctors"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "amenities" ADD CONSTRAINT "FK_ea2b9239676a092e88ebd9772bc" FOREIGN KEY ("amenity_id") REFERENCES "amenities"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "amenities" DROP CONSTRAINT "FK_ea2b9239676a092e88ebd9772bc"`);
        await queryRunner.query(`ALTER TABLE "amenities" DROP CONSTRAINT "FK_c0777308847b3556086f2fb233e"`);
        await queryRunner.query(`ALTER TABLE "doctors" DROP CONSTRAINT "FK_f6939226084cf69961d4d12ffa8"`);
        await queryRunner.query(`ALTER TABLE "doctors" DROP CONSTRAINT "FK_00707f52ac6001ac36c7486b7e4"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_9765e12c0270954df4ee2bf0218"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_ea2b9239676a092e88ebd9772b"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_c0777308847b3556086f2fb233"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f6939226084cf69961d4d12ffa"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_00707f52ac6001ac36c7486b7e"`);
        await queryRunner.query(`ALTER TABLE "amenities" ADD CONSTRAINT "UQ_c0777308847b3556086f2fb233e" UNIQUE ("id")`);
        await queryRunner.query(`ALTER TABLE "amenities" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "amenities_id_seq"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_9765e12c0270954df4ee2bf0218" FOREIGN KEY ("amenityId") REFERENCES "amenities"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "doctors" DROP CONSTRAINT "PK_f44899ed4b44e34b65ce3c01073"`);
        await queryRunner.query(`ALTER TABLE "doctors" ADD CONSTRAINT "PK_42cd57286d4cfda1e439c37c938" PRIMARY KEY ("id", "id_1", "id_2")`);
        await queryRunner.query(`ALTER TABLE "amenities" DROP CONSTRAINT "PK_096fc7a850c8fc8e1da4973c78a"`);
        await queryRunner.query(`ALTER TABLE "amenities" ADD CONSTRAINT "PK_c0777308847b3556086f2fb233e" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "amenities" DROP COLUMN "amenity_id"`);
        await queryRunner.query(`ALTER TABLE "doctors" DROP CONSTRAINT "PK_42cd57286d4cfda1e439c37c938"`);
        await queryRunner.query(`ALTER TABLE "doctors" ADD CONSTRAINT "PK_bb6bc744294d70177d2ef74c62f" PRIMARY KEY ("id", "id_1")`);
        await queryRunner.query(`ALTER TABLE "doctors" DROP COLUMN "id_2"`);
        await queryRunner.query(`ALTER TABLE "doctors" DROP CONSTRAINT "PK_bb6bc744294d70177d2ef74c62f"`);
        await queryRunner.query(`ALTER TABLE "doctors" ADD CONSTRAINT "PK_8207e7889b50ee3695c2b8154ff" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "doctors" DROP COLUMN "id_1"`);
        await queryRunner.query(`ALTER TABLE "doctors" DROP COLUMN "fullname"`);
        await queryRunner.query(`ALTER TABLE "doctors" DROP CONSTRAINT "UQ_8207e7889b50ee3695c2b8154ff"`);
        await queryRunner.query(`ALTER TABLE "doctors" DROP CONSTRAINT "PK_8207e7889b50ee3695c2b8154ff"`);
        await queryRunner.query(`ALTER TABLE "doctors" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "amenities" DROP COLUMN "cost"`);
        await queryRunner.query(`ALTER TABLE "amenities" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "amenities" ADD "cost" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "amenities" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "doctors" ADD "fullname" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "doctors" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "doctors" ADD CONSTRAINT "UQ_8207e7889b50ee3695c2b8154ff" UNIQUE ("id")`);
        await queryRunner.query(`ALTER TABLE "doctors" ADD "id_2" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "doctors" ADD CONSTRAINT "PK_f6939226084cf69961d4d12ffa8" PRIMARY KEY ("id_2")`);
        await queryRunner.query(`ALTER TABLE "doctors" ADD "id_1" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "doctors" DROP CONSTRAINT "PK_f6939226084cf69961d4d12ffa8"`);
        await queryRunner.query(`ALTER TABLE "doctors" ADD CONSTRAINT "PK_f44899ed4b44e34b65ce3c01073" PRIMARY KEY ("id_1", "id_2")`);
        await queryRunner.query(`ALTER TABLE "doctors" ADD "amenity" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "amenities" ADD "amenity_id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "amenities" DROP CONSTRAINT "PK_c0777308847b3556086f2fb233e"`);
        await queryRunner.query(`ALTER TABLE "amenities" ADD CONSTRAINT "PK_096fc7a850c8fc8e1da4973c78a" PRIMARY KEY ("id", "amenity_id")`);
        await queryRunner.query(`CREATE INDEX "IDX_f6939226084cf69961d4d12ffa" ON "doctors" ("id_2") `);
        await queryRunner.query(`CREATE INDEX "IDX_00707f52ac6001ac36c7486b7e" ON "doctors" ("id_1") `);
        await queryRunner.query(`CREATE INDEX "IDX_ea2b9239676a092e88ebd9772b" ON "amenities" ("amenity_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_c0777308847b3556086f2fb233" ON "amenities" ("id") `);
        await queryRunner.query(`ALTER TABLE "doctors" ADD CONSTRAINT "FK_f6939226084cf69961d4d12ffa8" FOREIGN KEY ("id_2") REFERENCES "doctors"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "doctors" ADD CONSTRAINT "FK_00707f52ac6001ac36c7486b7e4" FOREIGN KEY ("id_1") REFERENCES "amenities"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "amenities" ADD CONSTRAINT "FK_ea2b9239676a092e88ebd9772bc" FOREIGN KEY ("amenity_id") REFERENCES "amenities"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "amenities" ADD CONSTRAINT "FK_c0777308847b3556086f2fb233e" FOREIGN KEY ("id") REFERENCES "doctors"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

}
