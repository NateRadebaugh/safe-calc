export const safeNum = (num) => num && Number.isSafeInteger(num) ? Number.parseFloat(num) : 0;
export const safeAdd = (a, b) => safeNum(a) + safeNum(b);
export const safeSubtract = (a, b) => safeNum(a) - safeNum(b);
export const safeMultiply = (width, height) => safeNum(width) * safeNum(height);
export const safeDivide = (a, b) => safeNum(b) == 0 ? 0 : safeNum(a) / safeNum(b);