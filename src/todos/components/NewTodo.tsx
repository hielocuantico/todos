"use client";

import { FormEvent, useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import * as todosApi from "@/todos/helpers/todos";
import { useRouter } from "next/navigation";

export const NewTodo = () => {
  const [description, setDescription] = useState("");

  const router = useRouter();

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (description.trim().length === 0) return;

    await todosApi.createTodo(description);
    setDescription("");
    router.refresh();
  };

  const deleteComplete = async () => {
    await todosApi.deleteTodosComplete();
    router.refresh();
  };

  return (
    <form onSubmit={onSubmit} className="flex w-full">
      <input
        type="text"
        // onChange={(event) => setDescription(event.target.value)}
        onChange={(e) => setDescription(e.target.value)}
        className="w-6/12 -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all"
        placeholder="¿Qué necesita ser hecho?"
      />

      <button
        type="submit"
        className="flex items-center justify-center rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all"
      >
        Crear
      </button>

      <span className="flex flex-1"></span>

      <button
        onClick={deleteComplete}
        type="button"
        className="flex items-center justify-center rounded ml-2 bg-red-400 p-2 text-white hover:bg-red-700 transition-all"
      >
        <IoTrashOutline />
        Delete
      </button>
    </form>
  );
};
