const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const lengthOfArray = randomNumber(5, 10);
let arrayOfProgressia = [];

const progressia = () => {
  const difBetweenElements = randomNumber(2, 6);
  let element = randomNumber(5, 20);

  for (let i = 0; lengthOfArray > i; i += 1){
    arrayOfProgressia.push(element);
    element += difBetweenElements;
  }
  return arrayOfProgressia;
}

const progressiaWithRightAnswer = () =>{
  progressia();
  const index = randomNumber(0,lengthOfArray-1);
  const rightAnswer = String(arrayOfProgressia[index]);
  arrayOfProgressia[index] = '..';
  arrayOfProgressia = arrayOfProgressia.join(' ');
  return [arrayOfProgressia, rightAnswer];
}

export default () => {
  console.log('What number is missing in the progression?');
  const arrayOfThreeValues = [];
  for (let i = 0; i !== 3; i += 1) {
    arrayOfThreeValues.push(progressiaWithRightAnswer());
  }
  return arrayOfThreeValues;
};
