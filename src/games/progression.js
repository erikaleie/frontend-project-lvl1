import runGame from '../index.js';
import genNumber from '../utils.js';

const task = 'What number is missing in the progression?';

const genProgression = (start, step, size) => {
  const progression = [];

  for (let k = 0; k < size; k += 1) {
    progression.push(start + k * step);
  }

  return progression;
};

const genQuestionAndAnswer = () => {
  const start = genNumber(1, 100);
  const step = genNumber(1, 10);
  const size = 10;
  const hiddenIndex = genNumber(0, size - 1);

  const progression = genProgression(start, step, size);

  const rightAnswer = String(progression[hiddenIndex]);

  progression[hiddenIndex] = '..';

  const question = progression.join(' ');

  return [question, rightAnswer];
};

export default () => runGame(task, genQuestionAndAnswer);
