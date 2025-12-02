#! NO_COLOR=1 deno task solve --day 2

/**
 * Day 2: Gift Shop
 * @see https://adventofcode.com/2025/day/2
 */

export default function solve(input: string, level: 1 | 2) {
  const ranges = input.split(",").map((x) => x.split("-").map(Number));
  let sum = 0;
  for (const [start, end] of ranges) {
    for (let i = start; i <= end; i++) {
      if (isInvalid(i, level)) sum += i;
    }
  }
  return sum;
}

function isInvalid(num: number, level: 1 | 2) {
  const str = `${num}`;
  const len = str.length;
  if (level === 1) {
    if (len % 2) return false;
    return str.slice(0, len / 2) === str.slice(len / 2);
  }
  for (let i = 1; i <= len / 2; i++) {
    const times = len / i;
    if (!Number.isInteger(times)) continue;
    const factor = "1".padStart(i, "0").repeat(times);
    const quotient = num / +factor;
    if (Number.isInteger(quotient) && `${quotient}`.length === i) {
      return true;
    }
  }
  return false;
}
