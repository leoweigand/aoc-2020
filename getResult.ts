try {
  const day = Deno.args[0];
  const part = Deno.args[1];

  Deno.chdir('./' + day);
  const script = await import(`./${day}/index.ts`);
  const result = script[part]();
  console.log(result);
} catch (error) {
  console.error('Error running script: ', error);
  Deno.exit(1);
}
