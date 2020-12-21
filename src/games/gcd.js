#!/usr/bin/env node
import runGame from '../../index.js';

const task = 'Find the greatest common divisor of given numbers.';

const genQuestionAndAnswer = () => {
  const a = Math.floor(Math.random() * 101);
  const b = Math.floor(Math.random() * 101);
  const question = `${a} ${b}`;
  let res;
  let j = 1;
  while (a % j === 0 && b % j === 0) {
    res = j;
    j += 1;
  }
  const rightAnswer = String(res);
  return [question, rightAnswer];
};

runGame(task, genQuestionAndAnswer);
