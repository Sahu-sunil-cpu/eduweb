import express from "express";
import { prismaClient } from "@repo/db/prisma"

const app = express();

app.use(express.json());

app.get("/college", async (req, res) => {
    const data = await prismaClient.college.findMany();
    res.send(data);
})

app.get("/course/:id", async (req, res) => {
    const data = req.params
    const courseData = await prismaClient.course.findMany({
        where: {
            name: data.id
        }
    });
    res.send(courseData);
})

app.get("/subject/:id", async (req, res) => {
    const data = req.params
    const subjectData = await prismaClient.course.findMany({
        where: {
            name: data.id
        }
    });
    res.send(subjectData);
})

app.get("/chapter/:id", async (req, res) => {
    const data = req.params
    const chapterData = await prismaClient.course.findMany({
        where: {
            name: data.id
        }
    });
    res.send(chapterData);
})

app.post("/college", async (req, res) => {
    const data = req.body;
    const collegeData = await prismaClient.college.create({
        data: {
            name: data.name,
            collegeImg: data.collegeImg,
        }
    })

    res.send(collegeData);
})


app.post("/course", async (req, res) => {
    const data = req.body;
    const collegeData = await prismaClient.course.create({
        data: {
            name: data.name,
            courseImg: data.courseImg,
            collegeId: data.collegeId
        }
    })

    res.send(collegeData);
})

app.post("/subject", async (req, res) => {
    const data = req.body;
    const collegeData = await prismaClient.subject.create({
        data: {
            name: data.name,
            courseId: data.courseId,
        }
    })

    res.send(collegeData);
})


app.post("/chapter", async (req, res) => {
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



app.listen(8080, () => {
    console.log("i am listening on this port");
})