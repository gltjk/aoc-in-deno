#! NO_COLOR=1 deno task test --day 4 --year 2025

import solve from "../../solutions/2025/202504.ts";
import { assertEquals } from "@std/assert";

const example = `..@@.@@@@.
@@@.@.@.@@
@@@@@.@.@@
@.@@@@..@.
@@.@@@@.@@
.@@@@@@@.@
.@.@.@.@@@
@.@@@.@@@@
.@@@@@@@@.
@.@.@@@.@.`;

Deno.test("202504", () => {
  // assertEquals(solve(example, 1), 13);
  assertEquals(solve(example, 2), 43);
});
