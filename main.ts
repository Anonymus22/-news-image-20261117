// Entry program for the news-image-20261117 competition on make.fun.
//
// The entry itself is the poster beside this file: entry.png, a one-page
// newspaper summing up the world news of Tuesday 17 November 2026. This
// program's only job is to deliver that image to the output directory the
// grader reads, where it lands as entry.png. Node 22, standard library
// only, no network.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Resolve the poster relative to this file, not the working directory, so
// the copy works wherever the program is invoked from.
const posterPath = join(dirname(fileURLToPath(import.meta.url)), 'entry.png');
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });
copyFileSync(posterPath, join(outputDir, 'entry.png'));
