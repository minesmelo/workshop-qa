// JavaScript — parameters are not checked
function total(a, b) {
  return a + b;
}

console.log('total(3, 4) =>', total(3, 4));
console.log('total(3, "4") =>', total(3, '4'), '← string concat, not addition');
