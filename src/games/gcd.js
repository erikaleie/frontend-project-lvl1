import runGame from '../index.js';
import genNumber from '../utils.js';

const genGcd = (firstNumber, secondNumber) => {
  let result;
  let x = firstNumber;
  let y = secondNumber;
  while (x !== 0 && y !== 0) {
    if (x > y) {
      x %= y;
    } else {
      y %= x;
    }
    result = x + y;
  }
  return result;
};

const task = 'Find the greatest common divisor of given numbers.';

const genQuestionAndAnswer = () => {
  const firstNumber = genNumber(1, 100);
  const secondNumber = genNumber(1, 100);
  const question = `${firstNumber} ${secondNumber}`;

  const rightAnswer = String(genGcd(firstNumber, secondNumber));
  return [question, rightAnswer];
};

export default () => runGame(task, genQuestionAndAnswer);
