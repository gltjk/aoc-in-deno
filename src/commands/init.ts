import { type Day, prepare } from "../utils.ts";

export async function init(date: Day) {
  await prepare(date);
}
