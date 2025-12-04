#! NO_COLOR=1 deno task solve --day 4 --year 2025

/**
 * Day 4: Printing Department
 * @see https://adventofcode.com/2025/day/4
 */

// grid
import { Grid, Vector } from "helpers";

export default function solve(input: string, level: 1 | 2) {
  let count = 0;
  const grid = Grid.from(input);
  const removeList: Vector[] = [];
  do {
    removeList.length = 0;
    for (const { loc, cell } of grid.iter()) {
      if (cell === ".") continue;
      const neighborCount = grid.neighbors(loc, true)
        .filter((x) => x.cell === "@").toArray().length;
      if (neighborCount >= 4) continue;
      count += 1;
      if (level === 2) removeList.push(loc);
    }
    if (level === 1) break;
    for (const loc of removeList) grid.set(loc, ".");
  } while (removeList.length && level === 2);
  return count;
}
