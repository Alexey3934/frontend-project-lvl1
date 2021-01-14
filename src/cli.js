import readlineSync from 'readline-sync';

let name = '';

export const nameQuestion = () => {
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

const randomNumberLess20 = () => Math.floor(Math.random() * 20);

const arrayOfNumbersAndRightAnswers = () => {
  const number = randomNumberLess20();
  const rightAnswer = (number % 2 === 0) ? 'yes' : 'no';
  return [number, rightAnswer];
};

const expressionWithRightAnswer = () => {
  const operators = ['-', '+', '*'];
  const indexOf3elements = Math.floor(Math.random() * 3);
  const operator = operators[indexOf3elements];
  const firstNumber = randomNumberLess20();
  const secondNumber = randomNumberLess20();
  const expression = `${firstNumber} ${operator} ${secondNumber}`;
  let rightAnswer = 0;
  if (operator === '-') {
    rightAnswer = firstNumber - secondNumber;
  } else {
    rightAnswer = (operator === '+') ? firstNumber + secondNumber : firstNumber * secondNumber;
  }
  rightAnswer = String(rightAnswer);
  return [expression, rightAnswer];
};

export const generateThreeNumbers = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const arrayOfThreeValues = [];
  for (let i = 0; i !== 3; i += 1) {
    arrayOfThreeValues.push(arrayOfNumbersAndRightAnswers());
  }
  return arrayOfThreeValues;
};

export const generateThreeExpressions = () => {
  console.log('What is the result of the expression?');
  const arrayOfThreeValues = [];
  for (let i = 0; i !== 3; i += 1) {
    arrayOfThreeValues.push(expressionWithRightAnswer());
  }
  return arrayOfThreeValues;
};

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
};
