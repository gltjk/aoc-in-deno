#! NO_COLOR=1 deno task test --day 2 --year 2025

import solve from "../../solutions/2025/202502.ts";
import { assertEquals } from "@std/assert";

const example = `11-22,95-115,998-1012,1188511880-1188511890,222220-222224,
1698522-1698528,446443-446449,38593856-38593862,565653-565659,
824824821-824824827,2121212118-2121212124`;

Deno.test("202502", () => {
  assertEquals(solve(example, 1), 1227775554);
  assertEquals(solve(example, 2), 4174379265);
});
