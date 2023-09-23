import React from "react";
import Todo from "./components/Todo";
import { prisma } from "./db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const data = await getData();
  return (
    <div className="flex flex-wrap gap-4">
      {data.map((element) => (
        <Todo data={element} />
      ))}
    </div>
  );
}

async function getData() {
  return await prisma.todo.findMany();
}
