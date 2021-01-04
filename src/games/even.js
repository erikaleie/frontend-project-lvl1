import runGame from '../index.js';
import genRandomNumber from '../utils.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const genQuestionAndAnswer = () => {
  const question = genRandomNumber(1, 100);
  const rightAnswer = (question % 2 === 0) ? 'yes' : 'no';
  return [question, rightAnswer];
};

export default () => runGame(task, genQuestionAndAnswer);
