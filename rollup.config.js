import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import postcssPresetEnv from "postcss-preset-env";
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
        dir: "dist/cjs",
        banner,
        format: "cjs"
      }
    ],
    plugins: [
      typescript({
        typescript: require("typescript")
      }),
      resolve(),
      commonjs()
    ],
    external: [
      "tslib"
    ]
  },
  {
    input: "src/index.ts",
    output: [
      {
        name: "MetisMenu",
        file: production ? pkg.browser : 'docs/assets/js/metismenujs.js',
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
  {
    input: "scss/metismenujs.scss",
    output: [
      {
        file: production ? pkg.style : "docs/assets/css/metismenujs.css",
        format: "cjs",
        banner
      },
    ],
    plugins: [
      postcss({
        extract: true,
        sourceMap: true,
        plugins: [
          postcssPresetEnv({
            autoprefixer: {
              flexbox: 'no-2009',
            },
            stage: 3,
          })
        ]
      })
    ]
  },
  {
    input: "scss/metismenujs.scss",
    output: [
      {
        file: "dist/metismenujs.min.css",
        format: "cjs",
        banner
      }
    ],
    plugins: [
      postcss({
        extract: true,
        sourceMap: true,
        minimize: true,
        plugins: [
          postcssPresetEnv({
            autoprefixer: {
              flexbox: 'no-2009',
            },
            stage: 3,
          })
        ]
      })
    ]
  }
];
