/*
  Warnings:

  - You are about to drop the `_CollegeToCourse` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_CollegeToCourse" DROP CONSTRAINT "_CollegeToCourse_A_fkey";

-- DropForeignKey
ALTER TABLE "_CollegeToCourse" DROP CONSTRAINT "_CollegeToCourse_B_fkey";

-- DropTable
DROP TABLE "_CollegeToCourse";

-- CreateTable
CREATE TABLE "_collegeToCourse" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_collegeToCourse_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_collegeToCourse_B_index" ON "_collegeToCourse"("B");

-- AddForeignKey
ALTER TABLE "_collegeToCourse" ADD CONSTRAINT "_collegeToCourse_A_fkey" FOREIGN KEY ("A") REFERENCES "College"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_collegeToCourse" ADD CONSTRAINT "_collegeToCourse_B_fkey" FOREIGN KEY ("B") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;
