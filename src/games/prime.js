import runGame from '../index.js';
import genNumber from '../utils.js';

const isPrime = (number) => {
  if (number === 1) {
    return false;
  }

  for (let j = 2; j < number; j += 1) {
    if (number % j === 0) {
      return false;
    }
  }
  return true;
};

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const genQuestionAndAnswer = () => {
  const question = genNumber(1, 100);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

export default () => runGame(task, genQuestionAndAnswer);
