/**
 * 参考链接: https://github.com/vitejs/vite/blob/master/src/node/config.ts
 */
import { join, sep } from 'path';
import { UserConfig } from 'vite';
import dotenv from 'dotenv';

dotenv.config({ path: join(__dirname, '.env') });
const root = join(__dirname, 'src/render');

const config: UserConfig = {
  root,
  port: +process.env.PORT,
  base: './',
  outDir: join(__dirname, 'dist/render'),
  alias: {
    // 别名必须以 / 开头、结尾
    '/assets/': join(__dirname, 'src/render/assets'),
    '/components/': join(__dirname, 'src/render/components'),
    '/utils/': join(__dirname, 'src/render/utils'),
    '/router/': join(__dirname, 'src/render/router'),
    '/store/': join(__dirname, 'src/render/store'),
    '/views/': join(__dirname, 'src/render/views'),
  },
  cssPreprocessOptions: {
    //这里注意，键名是scss不是sass！一字之差能让你折腾好久
    scss: {
      //这里写你想导入全局scss变量的路径
      //这里注意只能写相对路径，alias貌似在css中不会生效
      additionalData: "@import './src/render/styles/var.scss';",
    },
  },
  optimizeDeps: {
    // 这里不加也没事，用 require 的形式就能避开 import 被编译成 /@modules/fs?import
    // allowNodeBuiltins: ['electron-is-dev', 'electron-store', 'electron']
  },
  rollupInputOptions: {
    external: ['crypto', 'assert', 'fs', 'util', 'os', 'events', 'child_process', 'http', 'https', 'path', 'electron'],
    plugins: [
      {
        name: '@rollup/plugin-cjs2esm',
        transform(code, filename) {
          if (filename.includes(`${sep}node_modules${sep}`)) {
            return code;
          }

          const cjsRegexp = /(const|let|var)[\n\s]+(\w+)[\n\s]*=[\n\s]*require\(["|'](.+)["|']\)/g;
          const res = code.match(cjsRegexp);
          if (res) {
            // const Store = require('electron-store') -> import Store from 'electron-store'
            code = code.replace(cjsRegexp, `import $2 from '$3'`);
          }
          return code;
        },
      },
    ],
  },
  rollupOutputOptions: {
    format: 'commonjs',
  },
};

export default config;
