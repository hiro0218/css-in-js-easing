const c1 = 1.70158;
const c2 = c1 * 1.525;
const c3 = c1 + 1;
export const linear = "linear";
export const linearFunction = (x: number) => {
  return x;
};
export const ease = "ease";
export const easeFunction = (x: number) => {
  return -Math.cos(x * Math.PI) / 2 + 0.5;
};
export const easeIn = "ease-in";
export const easeInFunction = (x: number) => {
  return x * x * x;
};
export const easeOut = "ease-out";
export const easeOutFunction = (x: number) => {
  return 1 - Math.pow(1 - x, 3);
};
export const easeInOut = "ease-in-out";
export const easeInOutFunction = (x: number) => {
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
};
export const easeInSine = "cubic-bezier(0.12, 0, 0.39, 0)";
export const easeInSineFunction = (x: number) => {
  return 1 - Math.cos((x * Math.PI) / 2);
};
export const easeOutSine = "cubic-bezier(0.61, 1, 0.88, 1)";
export const easeOutSineFunction = (x: number) => {
  return Math.sin((x * Math.PI) / 2);
};
export const easeInOutSine = "cubic-bezier(0.37, 0, 0.63, 1)";
export const easeInOutSineFunction = (x: number) => {
  return -(Math.cos(Math.PI * x) - 1) / 2;
};
export const easeInQuad = "cubic-bezier(0.11, 0, 0.5, 0)";
export const easeInQuadFunction = (x: number) => {
  return x * x;
};
export const easeOutQuad = "cubic-bezier(0.5, 1, 0.89, 1)";
export const easeOutQuadFunction = (x: number) => {
  return 1 - (1 - x) * (1 - x);
};
export const easeInOutQuad = "cubic-bezier(0.45, 0, 0.55, 1)";
export const easeInOutQuadFunction = (x: number) => {
  return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
};
export const easeInCubic = "cubic-bezier(0.32, 0, 0.67, 0)";
export const easeInCubicFunction = (x: number) => {
  return x * x * x;
};
export const easeOutCubic = "cubic-bezier(0.33, 1, 0.68, 1)";
export const easeOutCubicFunction = (x: number) => {
  return 1 - Math.pow(1 - x, 3);
};
export const easeInOutCubic = "cubic-bezier(0.65, 0, 0.35, 1)";
export const easeInOutCubicFunction = (x: number) => {
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
};
export const easeInQuart = "cubic-bezier(0.5, 0, 0.75, 0)";
export const easeInQuartFunction = (x: number) => {
  return x * x * x * x;
};
export const easeOutQuart = "cubic-bezier(0.25, 1, 0.5, 1)";
export const easeOutQuartFunction = (x: number) => {
  return 1 - Math.pow(1 - x, 4);
};
export const easeInOutQuart = "cubic-bezier(0.76, 0, 0.24, 1)";
export const easeInOutQuartFunction = (x: number) => {
  return x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2;
};
export const easeInQuint = "cubic-bezier(0.64, 0, 0.78, 0)";
export const easeInQuintFunction = (x: number) => {
  return x * x * x * x * x;
};
export const easeOutQuint = "cubic-bezier(0.22, 1, 0.36, 1)";
export const easeOutQuintFunction = (x: number) => {
  return 1 - Math.pow(1 - x, 5);
};
export const easeInOutQuint = "cubic-bezier(0.83, 0, 0.17, 1)";
export const easeInOutQuintFunction = (x: number) => {
  return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;
};
export const easeInExpo = "cubic-bezier(0.7, 0, 0.84, 0)";
export const easeInExpoFunction = (x: number) => {
  return x === 0 ? 0 : Math.pow(2, 10 * x - 10);
};
export const easeOutExpo = "cubic-bezier(0.16, 1, 0.3, 1)";
export const easeOutExpoFunction = (x: number) => {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
};
export const easeInOutExpo = "cubic-bezier(0.87, 0, 0.13, 1)";
export const easeInOutExpoFunction = (x: number) => {
  return x === 0
    ? 0
    : x === 1
    ? 1
    : x < 0.5
    ? Math.pow(2, 20 * x - 10) / 2
    : (2 - Math.pow(2, -20 * x + 10)) / 2;
};
export const easeInCirc = "cubic-bezier(0.55, 0, 1, 0.45)";
export const easeInCircFunction = (x: number) => {
  return 1 - Math.sqrt(1 - Math.pow(x, 2));
};
export const easeOutCirc = "cubic-bezier(0, 0.55, 0.45, 1)";
export const easeOutCircFunction = (x: number) => {
  return Math.sqrt(1 - Math.pow(x - 1, 2));
};
export const easeInOutCirc = "cubic-bezier(0.85, 0, 0.15, 1)";
export const easeInOutCircFunction = (x: number) => {
  return x < 0.5
    ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2
    : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2;
};
export const easeInBack = "cubic-bezier(0.36, 0, 0.66, -0.56)";
export const easeInBackFunction = (x: number) => {
  return c3 * x * x * x - c1 * x * x;
};
export const easeOutBack = "cubic-bezier(0.34, 1.56, 0.64, 1)";
export const easeOutBackFunction = (x: number) => {
  return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
};
export const easeInOutBack = "cubic-bezier(0.68, -0.6, 0.32, 1.6)";
export const easeInOutBackFunction = (x: number) => {
  return x < 0.5
    ? (Math.pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2
    : (Math.pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
};
