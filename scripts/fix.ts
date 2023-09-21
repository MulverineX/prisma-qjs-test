import path from 'path'
import { fileURLToPath } from 'url'

import fs from 'fs-extra'

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function fix() {
    const bundle = path.join(__dirname, '..', 'dist', 'bundle.js');

    await fs.writeFile(bundle, `${await fs.readFile(path.join(__dirname, 'polyfills.js'))}\n\n${await fs.readFile(bundle, 'utf-8')}`);
}

fix();