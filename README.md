# css-in-js-easing

This library retrieves easing-function for CSS property.
It is primarily intended for use with CSS-in-JS.

## install

```bash
npm i -D css-in-js-easing
```

## usage

```ts
import { easeInOutBack } from 'css-in-js-easing';
```

```ts
const sample = styled.div`
 transition-timing-function: ${easeInOutBack};
`
```
