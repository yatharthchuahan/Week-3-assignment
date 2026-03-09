/**
 *   TASK 3 — Student Score Analysis
 */

const students = [
  { name: "Alice",   age: 22, scores: [78, 85, 92] },
  { name: "Bob",     age: 20, scores: [88, 90, 76] },
  { name: "Charlie", age: 21, scores: [95, 80, 85] },
];

// calculate average of a scores array
function calcAverage(scores) {
  const total = scores.reduce((sum, score) => sum + score, 0);
  return parseFloat((total / scores.length).toFixed(2));
}

//analyse all students & find the top performer
function analyseStudents(studentList) {
  // average score to each student
  const withAverages = studentList.map(student => ({
    ...student,
    average: calcAverage(student.scores),
  }));

  //student with the highest average
  const topStudent = withAverages.reduce((best, current) =>
    current.average > best.average ? current : best
  );

  return { withAverages, topStudent };
}

// Display 
const { withAverages, topStudent } = analyseStudents(students);

console.log("━".repeat(52));
console.log("  TASK 3 — Student Score Analysis");
console.log("━".repeat(52));

withAverages.forEach(student => {
  console.log(`  ${student.name.padEnd(10)} | Age: ${student.age} | Scores: [${student.scores.join(", ")}] | Avg: ${student.average}`);
});

console.log("─".repeat(52));
console.log(`  Top Student: ${topStudent.name} with an average score of ${topStudent.average}`);
console.log("━".repeat(52));
