"use client";

import { useState } from "react";

export default function ToDoLabel({ data }) {
  const [complete, setComplete] = useState(data.completed);
  const handleClick = async () => {
    await fetch(`/api/update/${data.id}`, {
      method: "PUT",
      body: JSON.stringify({ completed: !complete }),
    });
    setComplete(!complete);
  };
  return (
    <span
      className={`${
        complete ? "bg-green-300" : "bg-yellow-100"
      } rounded-full p-1 px-3 cursor-pointer`}
      onClick={handleClick}
    >
      {complete ? "completed" : "uncompleted"}
    </span>
  );
}
