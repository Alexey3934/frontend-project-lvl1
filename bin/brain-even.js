#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const threeRandomNumbers = () => {
  const arrayOfNumbers = [];
  for (let i = 0; i !== 3; i += 1) {
    const item = Math.random() * 100;
    arrayOfNumbers.push(Math.ceil(item));
  }
  return arrayOfNumbers;
};
const arrayOfNumbers = threeRandomNumbers();

for (let i = 0; arrayOfNumbers.length > i; i += 1) {
  const item = arrayOfNumbers[i];
  console.log(`Question: ${item}`);
  const answer = readlineSync.question('Your answer: ');
  const rightAnswer = (item % 2 === 0) ? 'yes' : 'no';
  if (answer === rightAnswer) {
    console.log('Correct!');
    if (i + 1 === arrayOfNumbers.length) console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
}
