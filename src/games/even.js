import runGame from '../index.js';
import genNumber from '../utils.js';

const brainEven = () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';

  const genQuestionAndAnswer = () => {
    const question = genNumber;
    const rightAnswer = (question % 2 === 0) ? 'yes' : 'no';
    return [question, rightAnswer];
  };

  runGame(task, genQuestionAndAnswer);
};

export default brainEven;
