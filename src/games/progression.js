import runGame from '../index.js';
import genNumber from '../utils.js';

const brainProgression = () => {
  const task = 'What number is missing in the progression?';

  const genQuestionAndAnswer = () => {
    const a = genNumber;
    const b = Math.floor(Math.random() * 11);
    const c = Math.floor(Math.random() * 10);
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

  runGame(task, genQuestionAndAnswer);
};
export default brainProgression;
