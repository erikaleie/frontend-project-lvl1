#!/usr/bin/env node
import runGame from '../../index.js';

const task = 'What is the result of the expression?';

const genQuestionAndAnswer = () => {
  const a = Math.floor(Math.random() * 101);
  const b = Math.floor(Math.random() * 10);

  const o = ['-', '+', '*'];
  const oper = o[Math.floor(Math.random() * 3)];

  const question = `${a} ${oper} ${b}`;

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

  const rightAnswer = String(res);
  return [question, rightAnswer];
};

runGame(task, genQuestionAndAnswer);
