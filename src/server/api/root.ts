import { createTRPCRouter } from "~/server/api/trpc";
import { courseRouter } from "./routers/course";
import { postsRouter } from "./routers/posts";
import { userRouter } from "./routers/user";
import { validateRouter } from "./routers/validate";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  course: courseRouter,
  post: postsRouter,
  user: userRouter,
  validate: validateRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
