const randomNumberLess20 = () => Math.floor(Math.random() * 20);

const getNOD = () => {
  const a = randomNumberLess20();
  const b = randomNumberLess20();
  let NOD = a;

  while (!((a % NOD === 0) && (b % NOD === 0))) {
    NOD -= 1;
  }
  NOD = String(NOD);
  return [`${a} ${b}`, NOD];
};

export default () => {
  console.log('Find the greatest common divisor of given numbers.');
  const arrayOfThreeValues = [];
  for (let i = 0; i !== 3; i += 1) {
    arrayOfThreeValues.push(getNOD());
  }
  return arrayOfThreeValues;
};
