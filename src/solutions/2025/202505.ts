#! NO_COLOR=1 deno task solve --day 5 --year 2025

/**
 * Day 5: Cafeteria
 * @see https://adventofcode.com/2025/day/5
 */

type Range = { from: number; to: number };

export default function solve(input: string, level: 1 | 2) {
  const [part1, part2] = input.split("\n\n");
  const ranges = part1.split("\n")
    .map((line) => {
      const [from, to] = line.split("-").map(Number);
      return { from, to };
    }).toSorted((x, y) => x.from - y.from)
    .reduce((acc, { from, to }) => {
      const last = acc.at(-1);
      if (last && last.to >= from - 1) {
        last.to = Math.max(last.to, to);
      } else {
        acc.push({ from, to });
      }
      return acc;
    }, [] as Range[]);
  if (level === 1) {
    return part2.split("\n").map(Number).reduce(
      (count, x) =>
        count + +ranges.some(({ from, to }) => x >= from && x <= to),
      0,
    );
  }
  return ranges.reduce((count, { from, to }) => count + (to - from + 1), 0);
}
