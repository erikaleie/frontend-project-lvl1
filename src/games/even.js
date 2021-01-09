import runGame from '../index.js';
import genRandomNumber from '../utils.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const genQuestionAndAnswer = () => {
  const question = genRandomNumber(1, 100);
  const rightAnswer = (isEven(question)) ? 'yes' : 'no';
  return [question, rightAnswer];
};

export default () => runGame(task, genQuestionAndAnswer);
