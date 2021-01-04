import runGame from '../index.js';
import genNumber from '../utils.js';

const task = 'What number is missing in the progression?';

const genQuestionAndAnswer = () => {
  const a = genNumber(1, 100);
  const b = genNumber(1, 10);
  const c = genNumber(1, 10);
  const arr = [a];

  for (let k = 1; k < 10; k += 1) {
    arr[k] = a + k * b;
  }

  const res = arr[c];
  arr[c] = '..';
  const question = `${arr.join(' ')} `;

  const rightAnswer = String(res);

  return [question, rightAnswer];
};

export default () => runGame(task, genQuestionAndAnswer);
