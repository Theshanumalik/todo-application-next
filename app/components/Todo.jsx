import React from "react";
import ToDoLabel from "./ToDoLabel";

export default function Todo({ data }) {
  return (
    <div className="max-w-[300px] w-full bg-white text-black p-3 rounded-lg flex flex-col items-start">
      <h1 className="text-2xl">{data.title}</h1>
      <p className="my-2 text-gray-700 flex-1">{data.description}</p>
      <hr className="bg-slate-100" />
      <ToDoLabel data={data} />
    </div>
  );
}
