import { TRPCError } from "@trpc/server";
import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const validateRouter = createTRPCRouter({
  findUser: publicProcedure
    .input(z.object({ handleStr: z.string() }))
    .query(async ({ input, ctx }) => {
      const user = await ctx.prisma.user.findFirst({
        where: { handleStr: input.handleStr },
      });
      // if user is not found return error
      if (!user)
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "User does not exist",
        });
      // else return publicly accessible information about the user
      return {
        found: true,
        name: user.name,
        handleStr: user.handleStr,
        image: user.image,
      };
    }),
});
