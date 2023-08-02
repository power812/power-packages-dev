import fs from 'fs';
import path from 'path';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve' // 解析第三方包
import commonjs from '@rollup/plugin-commonjs';
// import nodePolyfills from 'rollup-plugin-polyfill-node'; //第三方库补丁
import json from '@rollup/plugin-json'
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
          sourcemap: true,
          globals: {
            'axios': 'axios'
          },
        },
        {
          file: `./packages/${path}/dist/index.esm.js`,
          format: 'esm',
          name: 'power',
          sourcemap: true,
          globals: {
            'axios': 'axios'
          },
        }
      ],
      plugins: [
        typescript(),
        
        json(),
        // nodePolyfills( {
          
        // } ),
    
        commonjs({
          
        }),
        resolve({ jsnext: true, preferBuiltins: true, browser: true }),
      ],
      // external: ['axios'] 
    }
  ];
}

export default [...packageFiles.map((path) => output(path)).flat()];
