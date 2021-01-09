import runGame from '../index.js';
import genNumber from '../utils.js';

const task = 'What number is missing in the progression?';

const genProgression = (a, b) => {
  const arr = [a];

  for (let k = 1; k < 10; k += 1) {
    arr[k] = a + k * b;
  }

  return arr;
};

const genQuestionAndAnswer = () => {
  const a = genNumber(1, 100);
  const b = genNumber(1, 10);
  const c = genNumber(0, 9);

  const prog = genProgression(a, b);

  const result = prog[c];
  prog[c] = '..';

  const question = `${prog.join(' ')} `;

  const rightAnswer = String(result);

  return [question, rightAnswer];
};

export default () => runGame(task, genQuestionAndAnswer);
