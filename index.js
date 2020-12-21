import readlineSync from 'readline-sync';

const runGame = (task, genQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(task);

  const n = 3;
  let check = false;
  let i = 0;

  while (check === false) {
    const [question, rightAnswer] = genQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === rightAnswer) {
      i += 1;
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
      break;
    }

    if (i === n) {
      check = true;
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default runGame;
