#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const n = 3;
let check = false;
let i = 0;

while (check === false) {
  const num = Math.floor(Math.random() * 101);
  console.log(`Question: ${num} `);
  const answer = readlineSync.question('Your answer: ');

  let res = 'yes';

  // Проверка числа на простоту
  for (let j = 2; j < num; j += 1) {
    if (num % j === 0 || num === 1) {
      res = 'no';
    }

    if (res === answer) {
      i += 1;
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${res}'.\nLet's try again, ${userName}!`);
      break;
    }

    if (i === n) {
      check = true;
      console.log(`Congratulations, ${userName}!`);
    }
  }
}
