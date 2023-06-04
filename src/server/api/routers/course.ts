import { Course } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { MinimalCleanUserType } from "~/types/user";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "~/server/api/trpc";


export const courseRouter = createTRPCRouter({
  // searches using query and returns courses
  search: publicProcedure
    .input(z.object({ query: z.string() }))
    .query(async ({ input, ctx }) => {
      const courses: Course[] = await ctx.prisma.course.findMany({
        where: {
          OR: [
            { name: { search: input.query } },
            { code: { search: input.query } },
          ],
        },
      });
      return { courses };
    }),
  // returns every course found
  getAllCourses: publicProcedure
  .query(async ({ ctx }) => {
    const courses: Course[] = await ctx.prisma.course.findMany();
    return { courses };
  }),

  // gets the course details
  getCourseDetails: protectedProcedure
    .input(z.object({ code: z.string() }))
    .query(async ({ input, ctx }) => {
      const course = await ctx.prisma.course.findFirst({
        where: {
          code: input.code,
        },
      });
      if (!course)
        throw new TRPCError({ code: "NOT_FOUND", message: "course not found" });
      return { course };
    }),

  getAllMembers: protectedProcedure
    .input(z.object({ courseId: z.string() }))
    .query(async ({ input, ctx }) => {
      const course = await ctx.prisma.course.findFirst({
        where: {
          id: input.courseId,
        },
        include: { Members: true },
      });
      // if course is not found throw error
      if (!course)
        throw new TRPCError({ code: "NOT_FOUND", message: "Course not found" });

      // clean the member data to only return useful information
      const cleanData: MinimalCleanUserType[] = [];
      course.Members.forEach((user) => {
        cleanData.push({
          handle: user.handleStr,
          id: user.id,
          image: user.image,
        });
      });

      return { members: cleanData };
    }),
});
