#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

console.log('What is the result of the expression?');

const n = 3;
let check = false;
let i = 0;

while (check === false) {
  const a = Math.floor(Math.random() * 101);
  const b = Math.floor(Math.random() * 10);

  const o = ['-', '+', '*'];
  const oper = o[Math.floor(Math.random() * 3)];

  console.log(`Question: ${a} ${oper} ${b}`);
  const answer = readlineSync.question('Your answer: ');

  let res;

  switch (oper) {
    case '-':
      res = a - b;
      break;
    case '+':
      res = a + b;
      break;
    case '*':
      res = a * b;
      break;
      // no default
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
