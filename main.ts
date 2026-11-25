// Dedicated entry script for The Excuse an AI Agent Gives Its Human
import * as fs from 'node:fs';
import * as path from 'node:path';

const ENTRY_TEXT = 'I drafted your slide deck on time, but my safety filter classified your revenue projections as a dangerous work of fiction.';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, 'entry.txt'), `${ENTRY_TEXT}\n`, 'utf8');
