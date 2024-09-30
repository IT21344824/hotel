// Prisma Client Initialization
import { PrismaClient } from "@prisma/client";

global.prisma = global.prisma || new PrismaClient();

export const db = global.prisma;

// to ensures that during development (not in production),
// the Prisma client is stored globally to avoid creating multiple instances of PrismaClient
if (process.env.NODE_ENV !== "production") global.prisma = db;
