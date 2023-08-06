import fs from 'fs';
import path from 'path';
import typescript from '@rollup/plugin-typescript'; // ts
import resolve from '@rollup/plugin-node-resolve'; // 解析第三方包
import commonjs from '@rollup/plugin-commonjs'; // 支持第三方包cmd语法.默认只支持 ES6+的模块方式
import terser from '@rollup/plugin-terser'; // 压缩
import strip from '@rollup/plugin-strip';
import json from '@rollup/plugin-json';

const packagesDir = path.resolve(path.dirname('./'), 'packages');
const packageFiles = fs.readdirSync(packagesDir);

function output(path) {
  return [
    {
      input: [`./packages/${path}/lib/index.ts`],
      output: [
        {
          file: `./packages/${path}/dist/umd/index.js`,
          format: 'umd',
          name: 'power', // 指定导出模式（自动、默认、命名、无）
          sourcemap: true,
          globals: {
            axios: 'axios',
          },
        },
        {
          file: `./packages/${path}/dist/esm/index.esm.js`,
          format: 'esm',
          name: 'power',
          sourcemap: true,
          globals: {
            axios: 'axios',
          },
        },
        {
          file: `./packages/${path}/dist/cjs/index.csm.js`,
          format: 'cjs',
          name: 'power',
          sourcemap: true,
          globals: {
            axios: 'axios',
          },
        },
      ],
      plugins: [typescript(), strip(), json(), commonjs({}), resolve({ jsnext: true, preferBuiltins: true, browser: true })],
    },
  ];
}

export default [...packageFiles.map((path) => output(path)).flat()];
