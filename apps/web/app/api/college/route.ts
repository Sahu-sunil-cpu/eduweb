import { prismaClient } from "@repo/db/prisma";
import { NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

interface collegeData {
   name: string;
   img: string;
   course: {
      name: string,
      courseImg: string
   };
}

export async function GET() {
    const session = await getServerSession();

    if(!session?.user) {
       return NextResponse.json({message: "you are not logged in"});
    }
    const data = await prismaClient.college.findMany();
   
    return Response.json(data);
  }


  
  export async function POST(req: NextRequest) {
     
   const {name, img, course}: collegeData = await req.json();

   const collegeData = await prismaClient.college.create({
      data: {
          name: name,
          collegeImg: img,     
          course: {
              create: [course]
          }   
      }
  })
  }