/*
  Warnings:

  - You are about to drop the `CollegeOnCourses` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CollegeOnCourses" DROP CONSTRAINT "CollegeOnCourses_collegeId_fkey";

-- DropForeignKey
ALTER TABLE "CollegeOnCourses" DROP CONSTRAINT "CollegeOnCourses_courseId_fkey";

-- DropTable
DROP TABLE "CollegeOnCourses";

-- CreateTable
CREATE TABLE "_CollegeToCourse" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_CollegeToCourse_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_CollegeToCourse_B_index" ON "_CollegeToCourse"("B");

-- AddForeignKey
ALTER TABLE "_CollegeToCourse" ADD CONSTRAINT "_CollegeToCourse_A_fkey" FOREIGN KEY ("A") REFERENCES "College"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CollegeToCourse" ADD CONSTRAINT "_CollegeToCourse_B_fkey" FOREIGN KEY ("B") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;
