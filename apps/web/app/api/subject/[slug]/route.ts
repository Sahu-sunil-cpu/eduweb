import { prismaClient } from "@repo/db/prisma";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest, { params }: { params: Promise<{ slug: string }>}) {
  const { slug } = await params;
  const subjectData = await prismaClient.subject.findMany({
    where: {
      courseId: parseInt(slug),
    }
});

return NextResponse.json(subjectData);
}