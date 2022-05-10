import { build as esbuild } from 'esbuild';

const common = {
  bundle: true,
  entryPoints: ['src/index.ts'],
  minify: true,
  sourcemap: false,
};

esbuild({
  ...common,
  logLevel: 'info',
  format: 'esm',
  outfile: './dist/index.esm.js',
  target: ['ES6'],
});

esbuild({
  ...common,
  logLevel: 'info',
  format: 'cjs',
  outfile: './dist/index.cjs.js',
  target: ['ES6'],
});
