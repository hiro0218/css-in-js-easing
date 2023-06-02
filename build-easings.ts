import * as fs from 'fs-extra';
import * as yamlParse from "js-yaml";
import * as prettier from "prettier";

type easingProp = {
  name: string;
  css: string;
  js: string;
}

const easingYml = fs.readFileSync("./src/easings.yml", "utf8");
const easing = yamlParse.load(easingYml) as easingProp[];

let data = `
const c1 = 1.70158;
const c2 = c1 * 1.525;
const c3 = c1 + 1;
`;

easing.map(({ name, css, js }) => {
  data += `export const ${name} = '${css}';\n`;
  data += `export const ${name}Function = ${js};\n`;
});

data = prettier.format(data, { parser: 'typescript' });

fs.outputFileSync('./src/index.ts', data);
