import fs from 'fs';
import path from 'path';
import createConfig from './shared/rollup.config.js';
const packagesDir = path.resolve(path.dirname('./'), 'packages');
const packageFiles = fs.readdirSync(packagesDir);

// 每个入口文件进行打包
export default packageFiles.map((path) => createConfig(`./packages/${path}/lib/index.ts`, `./packages/${path}/`)).flat();
