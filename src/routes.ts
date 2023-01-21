import { FastifyInstance } from "fastify";
import { prisma } from "./lib/prisma";

// Metodo HTTP: Get, Post, Put, Patch, Delete
export async function appRoutes(app: FastifyInstance) {
  app.get("/", async () => {
    const habits = await prisma.habit.findMany();
    return habits;
  });
}