import runGame from '../index.js';
import genNumber from '../utils.js';

const checkPrime = (question) => {
  let rightAnswer = 'yes';

  for (let j = 2; j < question; j += 1) {
    if (question % j === 0) {
      rightAnswer = 'no';
    }
  }
  return rightAnswer;
};

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const genQuestionAndAnswer = () => {
  const question = genNumber(1, 100);

  return [question, checkPrime(question)];
};

export default () => runGame(task, genQuestionAndAnswer);
