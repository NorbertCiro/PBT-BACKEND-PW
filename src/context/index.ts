import { PrismaClient } from "@prisma/client";

export interface MyContext {
  req?: String;
  prisma : PrismaClient
  userId?: string
}