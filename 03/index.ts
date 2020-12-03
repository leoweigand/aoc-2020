import readLines from '../helpers/readLines.ts';

const slopes = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]];

export function countTrees(offsetX: number, offsetY: number) {
  const lines = readLines('input.txt');
  let x = 0;
  let treeCount = 0;

  for (let y = 0; y < lines.length; y += offsetY) {
    const positions = lines[y].trim().split('');

    if (positions[x % positions.length] === '#') treeCount += 1;

    x += offsetX;
  }

  return treeCount;
}

export function part1() {
  return countTrees(slopes[1][0], slopes[1][1]);
}

export function part2() {
  return slopes.reduce(
    (total, slope) => total * countTrees(slope[0], slope[1]),
    1,
  );
}
