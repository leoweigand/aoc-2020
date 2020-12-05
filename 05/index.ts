const calculatePosition = (positions: boolean[], length: number) =>
  positions.reduce(
    (rows, next) =>
      rows.slice(
        next ? 0 : rows.length / 2,
        next ? rows.length / 2 : rows.length,
      ),
    Array.from({length: length}, (_, i) => i),
  )[0];

const seatID = (seat: string) => {
  const rows = seat
    .slice(0, 7)
    .split('')
    .map(row => row === 'F');
  const columns = seat
    .slice(7)
    .split('')
    .map(col => col === 'L');

  return calculatePosition(rows, 128) * 8 + calculatePosition(columns, 8);
};

export function part1(input: string) {
  const boardingPasses = input.split('\n');

  let highestSeat = 0;
  for (let seat of boardingPasses) {
    highestSeat = Math.max(highestSeat, seatID(seat));
  }

  return highestSeat;
}
