const randomNumberLess50 = () => Math.floor(Math.random() * 50);

const primeNumber = () => {
  let number = randomNumberLess50();
  let rightAnswer = 'yes';
  if (number > 3) {
    for (let i = 2; number > i; i += 1) {
      if (number % i === 0) {
        rightAnswer = 'no';
        break;
      }
    }
  }
  number = String(number);
  return [number, rightAnswer];
};

export default () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const arrayOfThreeValues = [];
  for (let i = 0; i !== 3; i += 1) {
    arrayOfThreeValues.push(primeNumber());
  }
  return arrayOfThreeValues;
};
