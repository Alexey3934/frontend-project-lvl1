const randomNumberLess20 = () => Math.floor(Math.random() * 20);

const arrayOfNumberAndRightAnswer = () => {
  const number = randomNumberLess20();
  const rightAnswer = (number % 2 === 0) ? 'yes' : 'no';
  return [number, rightAnswer];
};

export default () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const arrayOfThreeValues = [];
  for (let i = 0; i !== 3; i += 1) {
    arrayOfThreeValues.push(arrayOfNumberAndRightAnswer());
  }
  return arrayOfThreeValues;
};
