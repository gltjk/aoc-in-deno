#! NO_COLOR=1 deno task test --day 3 --year 2025

import solve from "../../solutions/2025/202503.ts";
import { assertEquals } from "@std/assert";

const example = `987654321111111
811111111111119
234234234234278
818181911112111`;

Deno.test("202503", () => {
  assertEquals(solve(example, 1), 357);
  assertEquals(solve(example, 2), 3121910778619);
});
