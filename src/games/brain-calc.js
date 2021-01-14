const randomNumberLess20 = () => Math.floor(Math.random() * 20);

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

export const generateThreeExpressions = () => {
  console.log('What is the result of the expression?');
  const arrayOfThreeValues = [];
  for (let i = 0; i !== 3; i += 1) {
    arrayOfThreeValues.push(expressionWithRightAnswer());
  }
  return arrayOfThreeValues;
};

