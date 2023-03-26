import { initTRPC } from "npm:@trpc/server";
import { z } from "npm:zod";
import { Context } from "./context.ts";

type User = {
  id: string;
  name: string;
  bio?: string;
};

const users: Record<string, User> = {};
const t = initTRPC.context<Context>().create();

const appRouter = t.router({
  getUserById: t.procedure.input(z.string()).query(({ input }) => {
    // input type is string
    return users[input];
  }),

  createUser: t.procedure
    // validate input with Zod
    .input(
      z.object({
        name: z.string().min(3),
        bio: z.string().max(142).optional(),
      }),
    )
    .mutation(({ input }) => {
      const id = Date.now().toString();
      const user: User = { id, ...input };

      users[user.id] = user;

      return user;
    }),
});

type AppRouter = typeof appRouter;

export { type AppRouter, appRouter, t };
