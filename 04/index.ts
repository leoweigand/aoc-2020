export function parseDocuments(batch: string) {
  const rawDocuments = batch.split('\n\n');
  const documents = rawDocuments
    .map(doc => {
      const fields = Array.from(doc.matchAll(/(\w{3}):(.+?)\s?/g), matches =>
        matches.slice(1),
      );

      return Object.fromEntries(fields);
    })
    .filter(Boolean);

  return documents;
}

export function isValidDocument(document: object) {
  const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

  for (let i = 0; i < requiredFields.length; i++) {
    if (!(requiredFields[i] in document)) {
      return false;
    }
  }

  return true;
}

export function part1(input: string) {
  const documents = parseDocuments(input);

  return documents.reduce(
    (validCount, document) =>
      isValidDocument(document) ? validCount + 1 : validCount,
    0,
  );
}
