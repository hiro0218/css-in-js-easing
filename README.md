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

## easing-function list

The following easing-function can export.

- `linear`
- `ease`
- `easeIn`
- `easeOut`
- `easeInOut`
- `easeInQuad`
- `easeInCubic`
- `easeInQuart`
- `easeInQuint`
- `easeInSine`
- `easeInExpo`
- `easeInCirc`
- `easeInBack`
- `easeOutQuad`
- `easeOutCubic`
- `easeOutQuart`
- `easeOutQuint`
- `easeOutSine`
- `easeOutExpo`
- `easeOutCirc`
- `easeOutBack`
- `easeInOutQuad`
- `easeInOutCubic`
- `easeInOutQuart`
- `easeInOutQuint`
- `easeInOutSine`
- `easeInOutExpo`
- `easeInOutCirc`
- `easeInOutBack`
