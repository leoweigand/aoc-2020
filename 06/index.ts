export function part1(input: string) {
  const groups = input.split('\n\n');

  return groups
    .map(group => new Set(group.replaceAll('\n', '').split('')))
    .reduce((count, group) => count + group.size, 0);
}

export function part2(input: string) {
  const groups = input
    .split('\n\n')
    .map(group => group.split('\n').map(person => person.split('')));

  return groups
    .map(group => group.reduce((a, b) => a.filter(c => b.includes(c))))
    .reduce((count, questions) => count + questions.length, 0);
}
