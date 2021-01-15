import readlineSync from 'readline-sync';
import greeting from './cli.js';

export default (arrayOfThreeValues) => {
   const name = greeting();
   const input =  arrayOfThreeValues(); 
  for (let i = 0; input.length > i; i += 1) {
    const [value, rightAnswer] = input[i];
    console.log(`Question: ${value}`);
    const answer = String(readlineSync.question('Your answer: '));
    if (answer === rightAnswer) {
      console.log('Correct!');
      if (i + 1 === input.length) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
};
