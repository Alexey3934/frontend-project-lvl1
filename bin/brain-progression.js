#!/usr/bin/env node

import { greeting } from '../src/cli.js';
import progressiaWithRightAnswer from '../src/games/brain-progression.js';
import bodyProcess from '../src/index.js';

greeting();

bodyProcess(progressiaWithRightAnswer());


