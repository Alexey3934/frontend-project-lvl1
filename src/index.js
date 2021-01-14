import readlineSync from 'readline-sync';
import {name} from './cli.js';

export const bodyProcess = (arrayOfThreeValues) => {
  for (let i = 0; arrayOfThreeValues.length > i; i += 1) {
    const [value, rightAnswer] = arrayOfThreeValues[i];
    console.log(`Question: ${value}`);
    const answer = String(readlineSync.question('Your answer: '));
    if (answer === rightAnswer) {
      console.log('Correct!');
      if (i + 1 === arrayOfThreeValues.length) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
} 

