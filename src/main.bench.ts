import { add } from "./main.ts";

Deno.bench("add: small", () => {
  add(1, 2);
});

Deno.bench("add: big", () => {
  add(2 ** 32, 2 ** 32);
});
