const arrayA = [1, 2, 3, 4, 5, 6];
const arrayB = [4, 5, 6, 7, 8, 9];

function getUniqueElements(arr1, arr2) {
  const onlyInArr1 = arr1.filter(item => !arr2.includes(item));
  const onlyInArr2 = arr2.filter(item => !arr1.includes(item));
  return [...onlyInArr1, ...onlyInArr2];
}

const result = getUniqueElements(arrayA, arrayB);

const shared = arrayA.filter(item => arrayB.includes(item));

console.log("━".repeat(50));
console.log("  TASK 2 — Return Unique Elements");
console.log("━".repeat(50));
console.log(`  Array A        : [${arrayA.join(", ")}]`);
console.log(`  Array B        : [${arrayB.join(", ")}]`);
console.log("─".repeat(50));
console.log(`  Shared (excluded) : [${shared.join(", ")}]`);
console.log("─".repeat(50));
console.log(`  Unique Elements   : [${result.join(", ")}]`);
console.log("━".repeat(50));
