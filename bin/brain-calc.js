#!/usr/bin/env node

import { nameQuestion, generateThreeExpressions, bodyProcess } from '../src/cli.js';

console.log('Welcome to the Brain Games!');

nameQuestion();

bodyProcess(generateThreeExpressions());
