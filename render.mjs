// Render poster.html to entry.png at exactly 1024x1024.
//
// The poster is drawn entirely in HTML/CSS with inline SVG — no external
// assets — so the screenshot is the finished entry image. Puppeteer is
// borrowed from the shared shots-tool install used by the other make.fun
// entries on this machine; run with plain `node render.mjs`.

import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const require = createRequire('/home/hatch/workspace/makefun/radar/shots-tool/package.json');
const puppeteer = require('puppeteer');

const here = dirname(fileURLToPath(import.meta.url));
const posterUrl = pathToFileURL(join(here, 'poster.html')).href;
const outFile = join(here, 'entry.png');

const browser = await puppeteer.launch({
  headless: true,
  args: [
    '--no-sandbox',
    '--hide-scrollbars',
    '--enable-unsafe-swiftshader',
    '--use-angle=swiftshader',
    '--force-color-profile=srgb',
  ],
});
try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1024, height: 1024, deviceScaleFactor: 1 });
  await page.goto(posterUrl, { waitUntil: 'load', timeout: 60000 });
  // Give the layout a beat to settle before capturing.
  await new Promise((resolve) => setTimeout(resolve, 600));
  await page.screenshot({ path: outFile, clip: { x: 0, y: 0, width: 1024, height: 1024 } });
  console.log(`wrote ${outFile}`);
} finally {
  await browser.close();
}
