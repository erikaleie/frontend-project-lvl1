#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const n = 3;
let check = false;
let i = 0;

while (check === false) {
  const randomNumber = Math.floor(Math.random() * 101);
  console.log(`Question: ${randomNumber}`);
  const answer = readlineSync.question('Your answer: ');

  if ((randomNumber % 2 === 0 && answer === 'yes') || (randomNumber % 2 !== 0 && answer === 'no')) {
    i += 1;
    console.log('Correct!');
  } else if (randomNumber % 2 === 0 && answer !== 'yes') {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`);
    break;
  } else if (randomNumber % 2 !== 0 && answer !== 'no') {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
    break;
  }

  if (i === n) {
    check = true;
    console.log(`Congratulations, ${userName}!`);
  }
}
