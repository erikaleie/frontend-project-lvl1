import runGame from '../../index.js';

const brainEven = () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';

  const genQuestionAndAnswer = () => {
    const question = Math.floor(Math.random() * 101);
    const rightAnswer = (question % 2 === 0) ? 'yes' : 'no';
    return [question, rightAnswer];
  };

  runGame(task, genQuestionAndAnswer);
};

export default brainEven;
