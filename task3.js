// Task 3 - Student Score Analysis

var students = [
    { name: 'Alice', age: 22, scores: [78, 85, 92] },
    { name: 'Bob', age: 20, scores: [88, 90, 76] },
    { name: 'Charlie', age: 21, scores: [95, 80, 85] }
];

function analyzeStudents() {
    var bestStudent = '';
    var bestAverage = 0;
    
   
    for(var i = 0; i < students.length; i++) {
        var total = 0;
        
        
        for(var j = 0; j < students[i].scores.length; j++) {
            total += students[i].scores[j];
        }
        
        var average = total / students[i].scores.length;
        
       
        if(average > bestAverage) {
            bestAverage = average;
            bestStudent = students[i].name;
        }
    }
    
  
    console.log("Top Student: " + bestStudent + " with an average score of " + bestAverage);
}


analyzeStudents();