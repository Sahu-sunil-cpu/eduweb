import { Router } from "express";
import { prismaClient } from "@repo/db/prisma";

export const route:Router = Router();


route.get("/getColleges", async (req, res) => {
    const data = await prismaClient.college.findMany();
    res.send(data);
})

route.get("/course/:id", async (req, res) => {
    const data = req.params
    console.log(data.id)
    const courseData = await prismaClient.college.findUnique({
    
        where: {
            id: parseInt(data.id)
        },
        include: {
            course: true
        }


    });
    res.send(courseData);
})

route.get("/subject/:id", async (req, res) => {
    const data = req.params
    const subjectData = await prismaClient.subject.findMany({
        where: {
          courseId: parseInt(data.id),
        }
    });
    res.send(subjectData);
})

route.get("/chapter/:id", async (req, res) => {
    const data = req.params
    const chapterData = await prismaClient.chapter.findMany({
        where: {
            subjectId: parseInt(data.id),
        }
    });
    res.send(chapterData);
})

route.post("/college", async (req, res) => {
    const data = req.body;
    const collegeData = await prismaClient.college.create({
        data: {
            name: data.name,
            collegeImg: data.collegeImg,     
            course: {
                create: [data.course]
            }   
        }
    })

    res.send(collegeData);
})


// route.post("/course", async (req, res) => {
//     const data = req.body;
//     const collegeData = await prismaClient.course.create({
//         data: {
//             name: data.name,
//             courseImg: data.courseImg,
//         }
//     })

//     res.send(collegeData);
// })

route.post("/subject", async (req, res) => {
    const data = req.body;
    const collegeData = await prismaClient.subject.create({
        data: {
            name: data.name,
            courseId: data.courseId,
        }
    })

    res.send(collegeData);
})


route.post("/chapter", async (req, res) => {
    const data = req.body;
    const collegeData = await prismaClient.chapter.create({
        data: {
            name: data.name,
            subjectId: data.subjectId,
            link: data.link
        }
    })

    res.send(collegeData);
})

route.get("/", (req, res) => {
    res.send("hi")
})