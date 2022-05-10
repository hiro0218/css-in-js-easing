const { build } = require('esbuild');

const common = {
  bundle: true,
  entryPoints: ['src/index.ts'],
  logLevel: 'info',
  minify: true,
  sourcemap: false,
};

build({
  ...common,
  format: 'esm',
  outfile: './dist/index.esm.js',
  target: ['ES6'],
});

build({
  ...common,
  format: 'cjs',
  outfile: './dist/index.cjs.js',
  target: ['ES6'],
});
