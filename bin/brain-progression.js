#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

console.log('What number is missing in the progression?');

const n = 3;
let check = false;
let i = 0;

while (check === false) {
  const a = Math.floor(Math.random() * 101);
  const b = Math.floor(Math.random() * 11);
  const c = Math.floor(Math.random() * 10);

  const arr = [a];

  for (let k = 1; k < 10; k += 1) {
    arr[k] = a + k * b;
  }
  const res = arr[c];
  arr[c] = '..';

  console.log(`Question: ${arr.join(' ')} `);
  const answer = readlineSync.question('Your answer: ');

  if (res === Number(answer)) {
    i += 1;
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${res}'.\nLet's try again, ${userName}`);
    break;
  }

  if (i === n) {
    check = true;
    console.log(`Congratulations, ${userName}`);
  }
}
