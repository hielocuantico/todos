import { prisma } from "@/app/lib/prisma";
import { Todo } from "@prisma/client";
import { NextResponse } from "next/server";
import * as yup from "yup";

interface Segments {
  params: { id: string };
}

const getTodo = async ( id: string ):Promise<Todo | null> => {
  const todo = await prisma.todo.findFirst({ where: { id }})

  return todo;
}

export async function GET(request: Request, { params }: Segments) {
  
  const todo = await getTodo(params.id);

  if (!todo) {
    return NextResponse.json(
      { messsage: "No se existe la piedra" },
      { status: 400 }
    );
  }

  return NextResponse.json({ todo });
}

const putSchema = yup.object({
  complete: yup.boolean().optional(),
  description: yup.string().optional(),
});

export async function PUT(request: Request, { params }: Segments) {  
  
  const todo = await getTodo(params.id);

  if (!todo) {
    return NextResponse.json(
      { messsage: "No se existe la piedra" },
      { status: 400 }
    );
  }

  try {
    const { complete, description } = await putSchema.validate(
      await request.json()
    );
    const updatedTodo = await prisma.todo.update({
      where: { id: params.id },
      data: { complete, description },
    });

    return NextResponse.json({ updatedTodo });

  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}


