import resolve from '@rollup/plugin-node-resolve'; //允许我们加载第三方模块
import commonjs from '@rollup/plugin-commonjs'; //插件将它们转换为ES6版本
import terser from '@rollup/plugin-terser'; //压缩,转译es6+语法，请改用terser
import json from '@rollup/plugin-json'; //可将.json文件转换为ES6模块
import { babel } from '@rollup/plugin-babel'; //正确解析我们的模块并使其与旧版浏览器兼容
// import autoExternal from 'rollup-plugin-auto-external'; //自动添加至 externals 未免
import bundleSize from 'rollup-plugin-bundle-size'; //分析包大小工具
import typescript from '@rollup/plugin-typescript'; // typescript打包
import serve from 'rollup-plugin-serve'; //服务
import path from 'path';
import fs from 'fs';
import { URL, fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname);

const pkgPath = path.resolve(process.cwd(), './package.json');
const lib = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));

const outputFileName = 'index';
const name = 'power'; // udm模式暴露全局变量

// const defaultInput = './lib/index.ts';

const buildConfig = ({ es5, browser = true, minifiedVersion = true, ...config }) => {
  const { file } = config.output;
  const ext = path.extname(file);
  const basename = path.basename(file, ext);
  const extArr = ext.split('.');
  extArr.shift();
  const build = ({ minified }) => ({
    input: config.input,
    ...config,
    output: {
      ...config.output,
      file: `${path.dirname(file)}/${basename}.${(minified ? ['min', ...extArr] : extArr).join('.')}`,
      sourcemap: true,

      // preserveModules: true,
    },
    plugins: [
      json(),
      resolve({ jsnext: true, preferBuiltins: true, browser: true, extensions: ['.js', '.ts'] }),
      commonjs(),
      typescript({
        // tsconfig: path.resolve(__dirname, 'tsconfig.json'),
      }),
      // autoExternal(),
      serve({
        port: 8000,
        contentBase: '', // 表示起的服务是在根目录下
        openPage: 'index.html', // 打开的是哪个文件
        open: true, // 默认打开浏览器
      }),
      minified && terser(),
      minified && bundleSize(),
      ...(es5
        ? [
            babel({
              babelHelpers: 'bundled',
              presets: ['@babel/preset-env'],
            }),
          ]
        : []),
      ...(config.plugins || []),
    ],
  });

  const configs = [build({ minified: false })];

  if (minifiedVersion) {
    configs.push(build({ minified: true }));
  }

  return configs;
};

// namedInput入口路径
export default (namedInput = './lib/index.ts', output = '') => {
  console.log(namedInput);
  const year = new Date().getFullYear();
  const banner = `// ${lib.name}  v${lib.version} Copyright (c) ${year} ${lib.author} and contributors`;

  return [
    // browser ESM bundle for CDN
    ...buildConfig({
      input: namedInput,
      output: {
        file: `${output}dist/esm/${outputFileName}.js`,
        format: 'esm',
        generatedCode: {
          constBindings: true,
        },
        exports: 'named',
        banner,
      },
    }),

    // Browser UMD bundle for CDN
    ...buildConfig({
      input: namedInput,
      es5: true,
      output: {
        file: `${output}dist/umd/${outputFileName}.js`,
        name,
        format: 'umd',
        exports: 'default',
        banner,
      },
    }),

    // Browser CJS bundle
    ...buildConfig({
      input: namedInput,
      es5: false,
      minifiedVersion: false, // 是否打包mini版本
      output: {
        file: `${output}dist/cjs/${outputFileName}.cjs`,
        name,
        format: 'cjs',
        exports: 'default',
        banner,
      },
    }),
  ];
};
