import typescript from "@rollup/plugin-typescript";
import pkg from "./package.json" assert { type: "json" };

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
        file: pkg.module,
        banner,
        format: "esm",
        sourcemap: true,
      },
      {
        file: "dist/index.mjs",
        banner,
        format: "esm"
      },
    ],
    plugins: [typescript()],
  },
  {
    input: "src/metismenujs.ts",
    output: [
      {
        name: "MetisMenu",
        file: pkg.main,
        banner,
        format: "umd",
        sourcemap: true,
      },
      {
        file: "dist/index.js",
        banner,
        format: "cjs"
      },
    ],
    plugins: [typescript()],
  }
];
