import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import pkg from "./package.json";

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
    input: "src/index.ts",
    output: [
      {
        file: "dist/metismenujs.esm.js",
        banner,
        format: "esm",
        sourcemap: true
      }
    ],
    plugins: [
      typescript({
        typescript: require("typescript")
      }),
      resolve(),
      commonjs()
    ]
  },
  {
    input: "src/index.ts",
    output: [
      {
        name: "MetisMenu",
        file: production ? pkg.main : 'docs/assets/js/metismenujs.js',
        banner,
        format: "umd",
        sourcemap: true
      }
    ],
    plugins: [
      typescript({
        typescript: require("typescript")
      }),
      resolve(),
      commonjs()
    ]
  },
];
