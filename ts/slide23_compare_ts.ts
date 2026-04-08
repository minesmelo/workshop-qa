// TypeScript — parameters and return type are declared
function total(a: number, b: number): number {
  return a + b;
}

console.log('total(3, 4) =>', total(3, 4));
console.log('total(3, "4") => (skipped) TypeScript error before run: string is not assignable to number');
