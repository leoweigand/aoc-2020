export default async function readLines(file: string) {
  const input = await Deno.readTextFile(file);
  return input.split('\n').filter(Boolean);
}
