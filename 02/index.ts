const parseLine = (line: string) =>
  (line.match(/(\d+)-(\d+) (\w): (\w+)/) ?? []).slice(1);

export function isValidPassword1(line: string) {
  const [min, max, letter, password] = parseLine(line);
  const letterCount = password
    .split('')
    .reduce((count, current) => (letter === current ? count + 1 : count), 0);

  return letterCount >= Number(min) && letterCount <= Number(max);
}

export function isValidPassword2(line: string) {
  const [pos1, pos2, letter, password] = parseLine(line);

  return (
    (password.charAt(Number(pos1) - 1) === letter) !==
    (password.charAt(Number(pos2) - 1) === letter)
  );
}

export function part1(input: string){
  const lines = input.split('\n')

  return lines.reduce(
    (count, line) => (isValidPassword1(line) ? count + 1 : count),
    0,
  );
}

export function part2(input: string){
  const lines = input.split('\n')

  return lines.reduce(
    (count, line) => (isValidPassword2(line) ? count + 1 : count),
    0,
  );
}
