#! NO_COLOR=1 deno task test --day 1 --year 2025

import solve from "../../solutions/2025/202501.ts";
import { assertEquals } from "@std/assert";

const example = `L68
L30
R48
L5
R60
L55
L1
L99
R14
L82`;

Deno.test("202501", () => {
  assertEquals(solve(example, 1), 3);
  assertEquals(solve(example, 2), 6);
});
