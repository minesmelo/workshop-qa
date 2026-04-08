// Same cart everywhere — each value is a line-item price in cents
const priceCents = [1200, 800, 20000, 500];

// map — convert each price (cents → dollars for display or export)
const priceDollars = priceCents.map((cents) => cents / 100);

// filter — keep only prices that match a rule (e.g. line items ≥ $10)
const premiumPriceCents = priceCents.filter((cents) => cents >= 1000);

// reduce — one total: sum every price (cart total in cents)
const totalCents = priceCents.reduce((sum, cents) => sum + cents, 0);

// forEach — side effect per price (e.g. print each line on a receipt)
priceCents.forEach((cents, i) =>
  console.log(`  Line ${i + 1}: $${(cents / 100).toFixed(2)}`),
);

console.log('map (convert prices → $) →', priceDollars);
console.log('filter (prices ≥ $10) → cents', premiumPriceCents);
console.log('reduce (total all prices) → $', (totalCents / 100).toFixed(2));
