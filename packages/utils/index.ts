export const sum = (a: number, b: number): number => a + b;

export const multiply = (a: number, b: number): number => a * b;

export const divide = (a: number, b: number): number => {
  if (b === 0) throw new Error('Cannot divide by zero');
  return a / b;
};

export const subtract = (a: number, b: number): number => a - b;

export const power = (base: number, exponent: number): number =>
  Math.pow(base, exponent);

export const sqrt = (n: number): number => {
  if (n < 0) throw new Error('Cannot calculate square root of negative number');
  return Math.sqrt(n);
};

// New: Utility for rounding
export const round = (n: number, decimals: number = 0): number => {
  const factor = Math.pow(10, decimals);
  return Math.round(n * factor) / factor;
};
