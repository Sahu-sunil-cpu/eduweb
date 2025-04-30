import { prismaClient } from "@repo/db/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {

    const { slug } = await params;
    console.log(slug)
    const data = await prismaClient.college.findUnique({
        where: {
            id: parseInt(slug)
        },
        include: {
            course: true
        }
    })

    return NextResponse.json(data?.course);
}

