import { prisma } from "@/app/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.json();
  const newTodo = await prisma.todo.create({
    data: {
      title: data.title,
      description: data.desc,
      completed: data.complete,
    },
  });
  return NextResponse.json(newTodo);
}
