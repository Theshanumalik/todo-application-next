import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header className="py-3 flex justify-between items-center">
      <h1 className="text-2xl">Todos</h1>
      <Link
        href="/new"
        className="border border-slate-200 p-3 rounded-md hover:bg-slate-500"
      >
        Add New
      </Link>
    </header>
  );
}
