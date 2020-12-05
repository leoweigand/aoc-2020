import * as path from 'https://deno.land/std/path/mod.ts';

try {
  const [day, part] = Deno.args;

  const script = await import(`./${day}/index.ts`);
  const inputPath = path.resolve(
    import.meta.url.slice(5), // strip `file:`
    '../',
    day,
    'input.txt',
  );
  const input = await Deno.readTextFile(inputPath);
  const func = 'part' + Number(part);

  const result = script[func](input);
  console.log('Result:', result);
} catch (error) {
  console.error('Error running script: ', error);
  Deno.exit(1);
}
