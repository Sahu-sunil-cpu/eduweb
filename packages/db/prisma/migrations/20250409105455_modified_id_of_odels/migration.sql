/*
  Warnings:

  - You are about to drop the column `name` on the `Chapter` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Chapter_name_key";

-- DropIndex
DROP INDEX "College_id_key";

-- DropIndex
DROP INDEX "Course_id_key";

-- DropIndex
DROP INDEX "Subject_id_key";

-- AlterTable
ALTER TABLE "Chapter" DROP COLUMN "name",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Chapter_pkey" PRIMARY KEY ("id");

-- AlterTable
CREATE SEQUENCE college_id_seq;
ALTER TABLE "College" ALTER COLUMN "id" SET DEFAULT nextval('college_id_seq');
ALTER SEQUENCE college_id_seq OWNED BY "College"."id";

-- AlterTable
CREATE SEQUENCE course_id_seq;
ALTER TABLE "Course" ALTER COLUMN "id" SET DEFAULT nextval('course_id_seq');
ALTER SEQUENCE course_id_seq OWNED BY "Course"."id";

-- AlterTable
CREATE SEQUENCE subject_id_seq;
ALTER TABLE "Subject" ALTER COLUMN "id" SET DEFAULT nextval('subject_id_seq');
ALTER SEQUENCE subject_id_seq OWNED BY "Subject"."id";
