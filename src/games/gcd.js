import runGame from '../index.js';
import genNumber from '../utils.js';

const genNod = (a, b) => {
  let acc;
  let x = a;
  let y = b;
  while (x !== 0 && y !== 0) {
    if (x > y) {
      x %= y;
    } else {
      y %= x;
    }
    acc = x + y;
  }
  return acc;
};

const task = 'Find the greatest common divisor of given numbers.';

const genQuestionAndAnswer = () => {
  const a = genNumber(1, 100);
  const b = genNumber(1, 100);
  const question = `${a} ${b}`;

  const rightAnswer = String(genNod(a, b));
  return [question, rightAnswer];
};

export default () => runGame(task, genQuestionAndAnswer);
