import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET( request: Request ) {

  await prisma.todo.deleteMany(); //Borra hasta la chimba

  await prisma.todo.createMany({
    data: [
      { description: "Piedra del alma", complete: true },
      { description: "Piedra del poder" },
      { description: "Piedra del tiempo" },
      { description: "Piedra del espacio" },
      { description: "Piedra del realidad" },
    ],
  });

  return NextResponse.json({ message: "Seed Executed" });
}
