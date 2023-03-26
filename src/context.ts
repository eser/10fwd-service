import { type inferAsyncReturnType } from "npm:@trpc/server";
import { type FetchCreateContextFnOptions } from "npm:@trpc/server/adapters/fetch";

function createContext({
  req,
  resHeaders,
}: FetchCreateContextFnOptions) {
  const user = { name: req.headers.get("username") ?? "anonymous" };

  return { req, resHeaders, user };
}

type Context = inferAsyncReturnType<typeof createContext>;

export { type Context, createContext };
