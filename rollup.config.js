import babel from 'rollup-plugin-babel';
import pkg from './package.json';

const banner = `/*!
* ${pkg.name} - v${pkg.version}
* ${pkg.description}
* ${pkg.homepage}
*
* Made by ${pkg.author}
* Under ${pkg.license} License
*/`;

const production = !process.env.ROLLUP_WATCH;

export default [
  {
    input: pkg.module,
    output: {
      file: pkg.main,
      banner,
      format: 'cjs',
    }
  },
  {
    input: pkg.module,
    output: {
      name: 'MetisMenu',
      file: pkg.browser,
      format: 'umd',
      sourcemap: true,
      banner
    },
    plugins: [
      production && babel()
    ],
  },
];
