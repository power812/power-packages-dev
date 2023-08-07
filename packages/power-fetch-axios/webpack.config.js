import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const examplesPath = path.resolve(__dirname, './examples');
const entry = fs.readdirSync(examplesPath).reduce((entries, dir) => {
  const fullDir = path.join(examplesPath, dir);
  const entry = path.join(fullDir, 'app.ts');
  if (fs.statSync(fullDir).isDirectory() && fs.existsSync(entry)) {
    entries[dir] = entry;
  }

  return entries;
}, {});

const config = {
  mode: 'development',
  /**
   * 我们会在 examples 目录下建多个子目录
   * 我们会把不同章节的 demo 放到不同的子目录中
   * 每个子目录的下会创建一个 app.ts
   * app.ts 作为 webpack 构建的入口文件
   * entries 收集了多目录个入口文件，并且每个入口还引入了一个用于热更新的文件
   * entries 是一个对象，key 为目录名
   */
  // entry: {
  //   sandbox: path.resolve(__dirname, 'examples/sandbox/app.ts'),
  // },
  entry: entry,

  /**
   * 根据不同的目录名称，打包生成目标 js，名称和目录名一致
   */
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  devtool: 'source-map',
  module: {
    rules: [
      // {
      //   test: /\.ts$/,
      //   enforce: 'pre',
      //   use: 'tslint-loader',
      //   exclude: /node_modules/,
      // },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    static: [
      {
        directory: __dirname,
      },
    ],
    compress: true,
    open: false,
    port: 8888,
    hot: true,
    // publicPath: '.',
    proxy: {
      // 配置跨域
      '/api': {
        target: 'http://localhost:3000',
        ws: true,
        changOrigin: true,
      },
    },
  },
  plugins: [new CleanWebpackPlugin()],
};

export default config;
