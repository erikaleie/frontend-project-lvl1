#!/usr/bin/env node
import runGame from '../../index.js';

const brainGcd = () => {
  const task = 'Find the greatest common divisor of given numbers.';

  const genQuestionAndAnswer = () => {
    const a = Math.floor(Math.random() * 101);
    const b = Math.floor(Math.random() * 101);
    const question = `${a} ${b}`;
    let res;

    let y = a;
    let x = b;

    while (x !== 0 && y !== 0) {
      if (x > y) {
        x %= y;
      } else {
        y %= x;
      }
      res = x + y;
    }

    const rightAnswer = String(res);
    return [question, rightAnswer];
  };

  runGame(task, genQuestionAndAnswer);
};
export default brainGcd;
