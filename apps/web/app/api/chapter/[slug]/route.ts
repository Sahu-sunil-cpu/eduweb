import { prismaClient } from "@repo/db/prisma";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest, { params }: { params: Promise<{slug: string}> }) {
    const { slug } = await params;
    const chapterData = await prismaClient.chapter.findMany({
        where: {
            subjectId: parseInt(slug),
        }
    });

    return NextResponse.json( chapterData );
}