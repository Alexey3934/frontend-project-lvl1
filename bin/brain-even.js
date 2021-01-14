#!/usr/bin/env node

import { greeting } from '../src/cli.js';
import generateThreeNumbers from '../src/games/brain-even.js';
import bodyProcess from '../src/index.js';

greeting();

bodyProcess(generateThreeNumbers());
