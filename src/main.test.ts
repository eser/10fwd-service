import { assertEquals } from "@std/testing/asserts.ts";
import { add } from "./main.ts";

Deno.test("add", () => {
  assertEquals(add(2, 3), 5);
});
