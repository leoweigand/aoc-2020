import {isValidPassword1, isValidPassword2, part1, part2} from './index.ts';
import {assertEquals} from 'https://deno.land/std@0.79.0/testing/asserts.ts';

Deno.test('Day 2: Password Philosophy Part 1', () => {
  assertEquals(isValidPassword1('1-3 a: abcde'), true);
  assertEquals(isValidPassword1('1-3 b: cdefg'), false);
  assertEquals(isValidPassword1('2-9 c: ccccccccc'), true);
});

Deno.test('Day 2: Password Philosophy Part 2', () => {
  assertEquals(isValidPassword2('1-3 a: abcde'), true);
  assertEquals(isValidPassword2('1-3 b: cdefg'), false);
  assertEquals(isValidPassword2('2-9 c: ccccccccc'), false);
});
