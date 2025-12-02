import { type Day, getPaths, prepare } from "../utils.ts";

export async function solve(date: Day) {
  const input = await prepare(date);

  const fn = await import(getPaths(date).solve.replace(/^\.\/src/, ".."))
    .then((x) => x.default as (input: string, level?: 1 | 2) => number);

  const start1 = performance.now();
  console.log("Answer 1:", fn(input, 1));
  const end1 = performance.now();
  console.log(`Time taken for answer 1: ${formatTime(end1 - start1)}`);

  console.log();

  const start2 = performance.now();
  console.log("Answer 2:", fn(input, 2));
  const end2 = performance.now();
  console.log(`Time taken for answer 2: ${formatTime(end2 - start2)}`);

  console.log();
  console.log(`Total time taken: ${formatTime(end2 - start1)}`);
}

function formatTime(ms: number) {
  return `${ms.toFixed(3)}ms`;
}
