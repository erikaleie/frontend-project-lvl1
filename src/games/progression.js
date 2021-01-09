import runGame from '../index.js';
import genNumber from '../utils.js';

const task = 'What number is missing in the progression?';

const genProgression = (start, step, size) => {
  const arr = [start];

  for (let k = 1; k < size; k += 1) {
    arr.push(start + k * step);
  }

  return arr;
};

const genQuestionAndAnswer = () => {
  const start = genNumber(1, 100);
  const step = genNumber(1, 10);
  const size = 10;
  const hiddenIndex = genNumber(0, 9);

  const prog = genProgression(start, step, size);

  const result = prog[hiddenIndex];
  prog[hiddenIndex] = '..';

  const question = `${prog.join(' ')} `;

  const rightAnswer = String(result);

  return [question, rightAnswer];
};

export default () => runGame(task, genQuestionAndAnswer);
