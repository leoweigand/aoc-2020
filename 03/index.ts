const splitLines = (input: string) => input.split('\n');

export function countTrees(lines: string[], offsetX: number, offsetY: number) {
  let x = 0;
  let treeCount = 0;

  for (let y = 0; y < lines.length; y += offsetY) {
    const positions = lines[y].trim().split('');

    if (positions[x % positions.length] === '#') treeCount += 1;

    x += offsetX;
  }

  return treeCount;
}

export function part1(input: string) {
  return countTrees(splitLines(input), 3, 1);
}

export function part2(input: string) {
  const lines = splitLines(input);
  const slopes = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]];

  return slopes.reduce(
    (total, slope) => total * countTrees(lines, slope[0], slope[1]),
    1,
  );
}
