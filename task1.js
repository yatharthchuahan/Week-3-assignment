/**
 *   TASK 1 — Find Second Largest Number
 */

const numbers = [23, 45, 67, 89, 12, 90, 44];

function findSecondLargest(arr) {
  //need at least 2 elements
  if (arr.length < 2) {
    return null;
  }

  let largest       = -Infinity;
  let secondLargest = -Infinity;

  for (const num of arr) {
    if (num > largest) {
      // Current largest gets demoted to second place
      secondLargest = largest;
      largest       = num;
    } else if (num > secondLargest && num !== largest) {
      // Update second largest only if num is distinct from largest
      secondLargest = num;
    }
  }

  return secondLargest === -Infinity ? null : secondLargest;
}

// ── Run & Display 
console.log("━".repeat(45));
console.log("  TASK 1 — Find Second Largest Number");
console.log("━".repeat(45));
console.log(`  Input Array   : [${numbers.join(", ")}]`);

const result = findSecondLargest(numbers);

console.log(`  Largest       : ${Math.max(...numbers)}`);
console.log(`  Second Largest: ${result}`);
console.log("━".repeat(45));
