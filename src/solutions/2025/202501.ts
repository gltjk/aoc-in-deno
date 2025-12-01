#! NO_COLOR=1 deno task solve --day 1

/**
 * Day 1: Secret Entrance
 * @see https://adventofcode.com/2025/day/1
 */

export default function solve(input: string, level: 1 | 2) {
  const clicks: Click[] = [];
  for (const row of input.split("\n")) {
    clicks.push({ dir: row[0] === "R" ? 1 : -1, times: +row.slice(1) });
  }
  return dial(clicks, level);
}

function dial(clicks: Click[], level: 1 | 2) {
  let zeroCount = 0;
  let loc = 50;
  for (const { dir, times } of clicks) {
    const [from, to] = [loc, loc + dir * times];
    loc = to % 100;
    zeroCount += level === 1
      ? +!(loc % 100)
      : dir > 0
      ? Math.floor(to / 100) - Math.floor(from / 100)
      : Math.ceil(from / 100) - Math.ceil(to / 100);
  }
  return zeroCount;
}

type Click = { dir: -1 | 1; times: number };
