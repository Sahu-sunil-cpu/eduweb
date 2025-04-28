import express from "express";
import { prismaClient } from "@repo/db/prisma"
import { route } from "./route";

const app = express();

app.use(express.json());


app.use('/api/structx', route);



app.listen(8080, () => {
    console.log("i am listening on this port");
})