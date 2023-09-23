import { prisma } from "@/app/db";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const body = await request.json();
  await prisma.todo.update({
    where: {
      id: parseInt(params.id),
    },
    data: {
      ...body,
    },
  });
  return NextResponse.json("UPDATED SUCCESSFULLY!!");
}
