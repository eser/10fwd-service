import { serve } from "@std/http/server.ts";
import { fetchRequestHandler } from "npm:@trpc/server/adapters/fetch";
import { createContext } from "./context.ts";
import { appRouter } from "./router.ts";

const add = (a: number, b: number) => a + b;

const handler = (request: Request) => {
  // Only used for start-server-and-test package that
  // expects a 200 OK to start testing the server
  if (request.method === "HEAD") {
    return new Response();
  }

  return fetchRequestHandler({
    endpoint: "/trpc",
    req: request,
    router: appRouter,
    createContext,
  });
};

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  serve(handler);
}

export { add, handler };
