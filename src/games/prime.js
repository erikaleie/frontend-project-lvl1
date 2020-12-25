import runGame from '../../index.js';

const brainPrime = () => {
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const genQuestionAndAnswer = () => {
    const question = Math.floor(Math.random() * 101);

    let rightAnswer = 'yes';

    // Проверка числа на простоту
    if (question === 1) {
      rightAnswer = 'no';
    }
    for (let j = 2; j < question; j += 1) {
      if (question % j === 0 || question === 1) {
        rightAnswer = 'no';
      }
    }
    return [question, rightAnswer];
  };

  runGame(task, genQuestionAndAnswer);
};
export default brainPrime;
