import readLines from '../helpers/readLines.ts';

export function isValidPassword(line: string) {
  const [, min, max, letter, password] = line.match(/(\d+)-(\d+) (\w): (\w+)/) ?? [];
  const letterCount = password
    .split('')
    .reduce((count, current) => (letter === current ? count + 1 : count), 0);

  return letterCount >= Number(min) && letterCount <= Number(max)
}

export default async function getResult() {
  const lines = await readLines('input.txt');
  return lines.reduce((count, line) => isValidPassword(line) ? count + 1 : count, 0)
}