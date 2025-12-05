#! NO_COLOR=1 deno task test --day 5 --year 2025

import solve from "../../solutions/2025/202505.ts";
import { assertEquals } from "@std/assert";

const example = `3-5
10-14
16-20
12-18

1
5
8
11
17
32`;

Deno.test("202505", () => {
  assertEquals(solve(example, 1), 3);
  assertEquals(solve(example, 2), 14);
});
