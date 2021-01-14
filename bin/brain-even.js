#!/usr/bin/env node

import { nameQuestion, generateThreeNumbers, bodyProcess } from '../src/cli.js';

console.log('Welcome to the Brain Games!');

nameQuestion();

bodyProcess(generateThreeNumbers());
