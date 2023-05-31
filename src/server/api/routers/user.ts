import { Course, User } from "@prisma/client";
import { z } from "zod";
import { CleanUserType, MinimalCleanUserType } from "~/components/types/user";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { CreateHandleStr } from "../functions/createHandleStr";

export const userRouter = createTRPCRouter({
  // searches using query and returns users
  search: protectedProcedure
    .input(z.object({ query: z.string() }))
    .query(async ({ input, ctx }) => {
      // get all matching users
      const users: User[] = await ctx.prisma.user.findMany({
        where: {
          OR: [
            { name: { search: input.query } },
            { handleStr: { search: input.query } },
          ],
        },
      });
      // clean data to remove sensitive information
      const cleanData: CleanUserType[] = [];

      users.forEach((user) => {
        cleanData.push({
          name: user.name,
          handleStr: user.handleStr,
          email: user.email,
          id: user.id,
          image: user.image,
        });
      });

      return { users: cleanData };
    }),
  // returns every user found
  getAll: protectedProcedure.query(async ({ ctx }) => {
    const users: User[] = await ctx.prisma.user.findMany();
    // clean data to remove sensitive information
    const cleanData: CleanUserType[] = [];

    users.forEach((user) => {
      cleanData.push({
        name: user.name,
        handleStr: user.handleStr,
        email: user.email,
        id: user.id,
        image: user.image,
      });
    });

    return { users: cleanData };
  }),

  // creates a user assuming the details are all valid
  create: publicProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string(),
        password: z.string(),
        image: z.string().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      // create handle string and check if it already exists
      let handle: string = CreateHandleStr(input.name);
      const user = await ctx.prisma.user.findFirst({
        where: { handleStr: handle },
      });
      // do it again
      if (user) handle = CreateHandleStr(input.name);
      const createdUser = await ctx.prisma.user.create({
        data: {
          email: input.email,
          password: input.password,
          name: input.name,
          handleStr: handle,
          image: input.image ?? "",
        },
      });

      return {
        user: {
          id: createdUser.id,
          name: createdUser.name,
          handleStr: createdUser.handleStr,
        },
      };
    }),

  getRecommendedUsers: protectedProcedure
    .input(z.object({ userId: z.string() }))
    .query(async ({ input, ctx }) => {
      // gets 10 users
      const users = await ctx.prisma.user.findMany({
        take: 11,
      });

      // clean data to remove sensitive information
      const cleanData: MinimalCleanUserType[] = [];
      users.forEach((user) => {
        // do not recommend self
        if (user.id !== input.userId)
          cleanData.push({
            handle: user.handleStr,
            id: user.id,
            image: user.image,
          });
      });
      return { users: cleanData };
    }),
});
