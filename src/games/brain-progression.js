const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

let lengthOfArray = 0;
let arrayOfProgressia = [];

const progressia = () => {
  const difBetweenElements = randomNumber(2, 6);
  let element = randomNumber(5, 20);
  arrayOfProgressia = [];
  lengthOfArray = randomNumber(5, 10);
  for (let i = 0; lengthOfArray > i; i += 1) {
    arrayOfProgressia.push(element);
    element += difBetweenElements;
  }
  return arrayOfProgressia;
};

const progressiaWithRightAnswer = () => {
  progressia();
  const index = randomNumber(0, lengthOfArray - 1);
  const rightAnswer = String(arrayOfProgressia[index]);
  arrayOfProgressia[index] = '..';
  let stringOfArray = '';
  stringOfArray = arrayOfProgressia.join(' ');
  return [stringOfArray, rightAnswer];
};

export default () => {
  console.log('What number is missing in the progression?');
  const arrayOfThreeValues = [];
  for (let i = 0; i !== 3; i += 1) {
    arrayOfThreeValues.push(progressiaWithRightAnswer());
  }
  return arrayOfThreeValues;
};
