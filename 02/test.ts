import getResult, {isValidPassword} from './index.ts';
import {assertEquals} from 'https://deno.land/std@0.79.0/testing/asserts.ts';

Deno.test('Day 2: Password Philosophy', () => {
  assertEquals(isValidPassword('1-3 a: abcde'), true);
  assertEquals(isValidPassword('1-3 b: cdefg'), false);
  assertEquals(isValidPassword('2-9 c: ccccccccc'), true);

  assertEquals(getResult(), 625);
});