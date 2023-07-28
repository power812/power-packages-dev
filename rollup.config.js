import fs from 'fs';
import path from 'path';
import typescript from '@rollup/plugin-typescript';
const packagesDir = path.resolve(path.dirname('./'), 'packages');
const packageFiles = fs.readdirSync(packagesDir);
function output(path) {
  return [
    {
      input: [`./packages/${path}/src/index.ts`],
      output: [
        {
          file: `./packages/${path}/dist/index.js`,
          format: 'umd',
          name: 'power',
          sourcemap: true
        },
        {
          file: `./packages/${path}/dist/index.esm.js`,
          format: 'esm',
          name: 'power',
          sourcemap: true
        }
      ],
      plugins: [
        typescript()
      ],
      external: ['axios'] 
    }
  ];
}

export default [...packageFiles.map((path) => output(path)).flat()];
