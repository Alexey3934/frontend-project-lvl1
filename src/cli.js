import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome tothe Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};
