import runGame from '../index.js';
import genNumber from '../utils.js';

const task = 'What is the result of the expression?';

const genQuestionAndAnswer = () => {
  const a = genNumber;
  const b = Math.floor(Math.random() * 11);
  const o = ['-', '+', '*'];
  const oper = o[Math.floor(Math.random() * 3)];

  const question = `${a} ${oper} ${b}`;

  let res;

  switch (oper) {
    case '-':
      res = a - b;
      break;

    case '+':
      res = a + b;
      break;

    case '*':
      res = a * b;
      break;

    default:
      break;
  }

  const rightAnswer = String(res);
  return [question, rightAnswer];
};

export default () => runGame(task, genQuestionAndAnswer);
