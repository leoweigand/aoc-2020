import readLines from '../helpers/readLines.ts';

export function isValidPassword1(line: string) {
  const [, min, max, letter, password] = line.match(/(\d+)-(\d+) (\w): (\w+)/) ?? [];
  const letterCount = password
    .split('')
    .reduce((count, current) => (letter === current ? count + 1 : count), 0);

  return letterCount >= Number(min) && letterCount <= Number(max)
}

export function isValidPassword2(line: string) {
  const [, pos1, pos2, letter, password] = line.match(/(\d+)-(\d+) (\w): (\w+)/) ?? [];
  return (password.charAt(Number(pos1) - 1) === letter) !== (password.charAt(Number(pos2) - 1) === letter)
}

export function getResult1() {
  const lines = readLines('input.txt');
  return lines.reduce((count, line) => isValidPassword1(line) ? count + 1 : count, 0)
}

export function getResult2() {
  const lines = readLines('input.txt');
  return lines.reduce((count, line) => isValidPassword2(line) ? count + 1 : count, 0)
}