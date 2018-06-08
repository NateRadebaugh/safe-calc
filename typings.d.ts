declare module "safe-calc" {
  function safeAdd(left: string | number, right: string | number): number;
  namespace safeAdd {}

  function safeDivide(left: string | number, right: string | number): number;
  namespace safeDivide {}

  function safeMultiply(left: string | number, right: string | number): number;
  namespace safeMultiply {}

  function safeNumber(left: string | number, right: string | number): number;
  namespace safeNumber {}

  function safeSubtract(left: string | number, right: string | number): number;
  namespace safeSubtract {}

  function safeSum(left: string | number, right: string | number): number;
  namespace safeSum {}
}

declare module "safe-calc/safe_add/index.js" {
  import { safeAdd } from "safe-calc";
  export = safeAdd;
}

declare module "safe-calc/safe_sum/index.js" {
  import { safeSum } from "safe-calc";
  export = safeSum;
}

declare module "safe-calc/safe_divide/index.js" {
  import { safeDivide } from "safe-calc";
  export = safeDivide;
}

declare module "safe-calc/safe_multiply/index.js" {
  import { safeMultiply } from "safe-calc";
  export = safeMultiply;
}

declare module "safe-calc/safe_number/index.js" {
  import { safeNumber } from "safe-calc";
  export = safeNumber;
}

declare module "safe-calc/safe_subtract/index.js" {
  import { safeSubtract } from "safe-calc";
  export = safeSubtract;
}
