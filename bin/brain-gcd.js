#!/usr/bin/env node

import { greeting } from '../src/cli.js';
import generateThreNODs from '../src/games/brain-gcd.js';
import bodyProcess from '../src/index.js';

greeting();

bodyProcess(generateThreNODs());
