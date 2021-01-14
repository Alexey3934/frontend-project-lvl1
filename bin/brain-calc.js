#!/usr/bin/env node

import {greeting} from '../src/cli.js';
import {generateThreeExpressions} from '../src/games/brain-calc.js';
import {bodyProcess} from '../src/index.js';

greeting();

bodyProcess(generateThreeExpressions());

