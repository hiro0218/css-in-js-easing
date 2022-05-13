import * as fs from 'fs-extra';
import * as yamlParse from "js-yaml";

type easingProp = {
  name: string;
  css: string;
}

const easingYml = fs.readFileSync("./src/easings.yml", "utf8");
const easing = yamlParse.load(easingYml) as easingProp[];

let data = '';

easing.map(({ name, css }) => {
  data += `export const ${name} = '${css}';\n`;
});

fs.outputFileSync('./src/index.ts', data);
