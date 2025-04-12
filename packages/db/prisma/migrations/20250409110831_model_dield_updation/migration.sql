/*
  Warnings:

  - Added the required column `name` to the `Chapter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Subject` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Chapter" ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Subject" ADD COLUMN     "name" TEXT NOT NULL;
