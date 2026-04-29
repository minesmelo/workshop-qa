// any — TypeScript does not check property access
let loose: any = "hello";
console.log("any — loose.whatever:", loose.whatever);

// unknown — must narrow before using as a string
let tight: unknown = "hello";

if (typeof tight === "string") {
  console.log("unknown — tight.length after typeof:", tight.length);
}
