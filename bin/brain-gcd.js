#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

console.log('Find the greatest common divisor of given numbers.');

const n = 3;
let check = false;
let i = 0;

while (check === false) {
  const a = Math.floor(Math.random() * 101);
  const b = Math.floor(Math.random() * 101);

  console.log(`Question: ${a} ${b}`);
  const answer = readlineSync.question('Your answer: ');

  let res;
  let j = 1;

  while (a % j === 0 && b % j === 0) {
    res = j;
    j += 1;
  }

  if (res === Number(answer)) {
    i += 1;
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was ${res}.\nLet's try again, ${userName}!`);
    break;
  }

  if (i === n) {
    check = true;
    console.log(`Congratulations, ${userName}!`);
  }
}
