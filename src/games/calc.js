import runGame from '../index.js';
import genNumber from '../utils.js';

const task = 'What is the result of the expression?';

const calcExpression = (leftOperand, rigthOperand, operation) => {
  let result;

  switch (operation) {
    case '-':
      result = leftOperand - rigthOperand;
      break;

    case '+':
      result = leftOperand + rigthOperand;
      break;

    case '*':
      result = leftOperand * rigthOperand;
      break;

    default:
      break;
  }
  return result;
};

const genQuestionAndAnswer = () => {
  const leftOperand = genNumber(1, 100);
  const rigthOperand = genNumber(1, 10);
  const operations = ['-', '+', '*'];
  const operation = operations[genNumber(0, operations.length - 1)];

  const question = `${leftOperand} ${operation} ${rigthOperand}`;

  const rightAnswer = String(calcExpression(leftOperand, rigthOperand, operation));
  return [question, rightAnswer];
};

export default () => runGame(task, genQuestionAndAnswer);
