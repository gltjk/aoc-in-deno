#! NO_COLOR=1 deno task solve --day 3

/**
 * Day 3: Lobby
 * @see https://adventofcode.com/2025/day/3
 */

export default function solve(input: string, level: 1 | 2) {
  return input.split("\n").reduce(
    (sum, row) => sum + getMaxJoltage(row, level === 1 ? 2 : 12),
    0,
  );
}

// a recursion solution based on the old solution
function getMaxJoltage(str: string, digit: number, res = ""): number {
  if (!digit) return +res;
  const max = "" +
    Math.max(...str.slice(0, str.length - digit + 1).split("").map(Number));
  return +getMaxJoltage(str.slice(str.indexOf(max) + 1), digit - 1, res + max);
}

// old solution, more readable, kept here for reference
function _getMaxJoltageOld(str: string, digit: number) {
  let res = "";
  for (let d = digit - 1; d >= 0; d--) {
    const max = "" +
      Math.max(...str.slice(0, str.length - d).split("").map(Number));
    res += max;
    str = str.slice(str.indexOf(max) + 1);
  }
  return +res;
}
