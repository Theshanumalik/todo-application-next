"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function AddNewTodo() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [complete, setComplete] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.length === 0 || desc.length === 0) return;
    const res = await fetch("/api/add", {
      method: "POST",
      body: JSON.stringify({ title, desc, complete }),
    });

    if (res.ok) {
      alert("helo");
    }
  };
  return (
    <form
      className="flex flex-col gap-2 max-w-[500px] w-full mx-auto"
      onSubmit={handleSubmit}
    >
      <label htmlFor="title">Title</label>
      <input
        type="text"
        placeholder="e.g. Study for test"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="p-3 rounded-md outline-0 text-gray-900"
      />
      <label htmlFor="description">Description</label>
      <textarea
        placeholder="e.g. Study for test"
        id="description"
        className="p-3 rounded-md outline-0 text-gray-900"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <div className="flex gap-1 items-center">
        <input
          type="checkbox"
          id="completed"
          className="w-5 h-5 accent-blue-600"
          checked={complete}
          onChange={(e) => setComplete(e.target.checked)}
        />
        <label htmlFor="completed">Mark as completed</label>
      </div>
      <div className="flex justify-end gap-1">
        <Link
          href="/"
          className="border border-slate-200 p-3 rounded-md hover:bg-slate-500"
        >
          Cancle
        </Link>
        <button className="border border-slate-200 p-3 rounded-md hover:bg-slate-500">
          Add task
        </button>
      </div>
    </form>
  );
}
