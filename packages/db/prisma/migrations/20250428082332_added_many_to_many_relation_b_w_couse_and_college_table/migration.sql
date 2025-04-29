-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_collegeId_fkey";

-- CreateTable
CREATE TABLE "CollegeOnCourses" (
    "collegeId" INTEGER NOT NULL,
    "courseId" INTEGER NOT NULL,

    CONSTRAINT "CollegeOnCourses_pkey" PRIMARY KEY ("collegeId","courseId")
);

-- AddForeignKey
ALTER TABLE "CollegeOnCourses" ADD CONSTRAINT "CollegeOnCourses_collegeId_fkey" FOREIGN KEY ("collegeId") REFERENCES "College"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CollegeOnCourses" ADD CONSTRAINT "CollegeOnCourses_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
