// I hadn’t figured out part 2 yet and wanted to move on, so I
// recreated @sophiebits’ solution instead. It’s so much shorter 😅
// https://github.com/sophiebits/adventofcode/blob/main/2020/day05.py

const seats = (input: string) =>
  input.split('\n').map(s =>
    // @ts-ignore
    parseInt(s.replaceAll(/\w/g, l => ({F: 0, B: 1, L: 0, R: 1}[l])), 2),
  );

export const part1 = (input: string) =>
  seats(input).reduce((max, seatID) => Math.max(max, seatID), 0);

export function part2(input: string) {
  const seatIDs = seats(input);
  for (let i = 0; i < 256 * 8; i++) {
    if (
      !seatIDs.includes(i) &&
      seatIDs.includes(i - 1) &&
      seatIDs.includes(i + 1)
    )
      return i;
  }
}
