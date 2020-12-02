export default function readLines(file: string) {
  const input = Deno.readTextFileSync(file);
  return input.split('\n').filter(Boolean);
}
