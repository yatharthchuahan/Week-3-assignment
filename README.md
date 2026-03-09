# Week 3 Assignment

This repository contains solutions to Week 3 programming assignments, consisting of four JavaScript tasks demonstrating various programming concepts.

## Tasks Overview

### Task 1: Find Second Largest Number
- **File**: `task1.js`
- **Description**: Implements a function to find the second largest number in an array of numbers.
- **Features**:
  - Handles arrays with duplicate values
  - Returns `null` for arrays with fewer than 2 elements
  - Efficient single-pass algorithm

### Task 2: Return Unique Elements
- **File**: `task2.js`
- **Description**: Finds elements that are unique to each of two input arrays (symmetric difference).
- **Features**:
  - Takes two arrays as input
  - Returns elements present in only one array
  - Excludes shared elements

### Task 3: Student Score Analysis
- **File**: `task3.js`
- **Description**: Analyzes student data to calculate averages and identify top performers.
- **Features**:
  - Processes array of student objects with scores
  - Calculates average scores for each student
  - Identifies the student with the highest average

### Task 4: Countdown Timer
- **Files**: `task4.html`, `task4.css`, `task4.js`
- **Description**: A web-based countdown timer application with visual progress ring.
- **Features**:
  - One-hour countdown timer
  - Start, pause, and reset controls
  - Circular progress indicator
  - Status messages and visual feedback

## How to Run

### Tasks 1-3 (Console Applications)
Run each task using Node.js:

```bash
node task1.js
node task2.js
node task3.js
```

### Task 4 (Web Application)
Open `task4.html` in a web browser to run the countdown timer application.

## Requirements
- Node.js (for running JavaScript files)
- Modern web browser (for Task 4)

## Output Examples

### Task 1 Output:
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  TASK 1 — Find Second Largest Number
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Input Array   : [23, 45, 67, 89, 12, 90, 44]
  Largest       : 90
  Second Largest: 89
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Task 2 Output:
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  TASK 2 — Return Unique Elements
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Array A        : [1, 2, 3, 4, 5, 6]
  Array B        : [4, 5, 6, 7, 8, 9]
──────────────────────────────────────────────────────
  Shared (excluded) : [4, 5, 6]
──────────────────────────────────────────────────────
  Unique Elements   : [1, 2, 3, 7, 8, 9]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Task 3 Output:
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  TASK 3 — Student Score Analysis
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Alice      | Age: 22 | Scores: [78, 85, 92] | Avg: 85.00
  Bob        | Age: 20 | Scores: [88, 90, 76] | Avg: 84.67
  Charlie    | Age: 21 | Scores: [95, 80, 85] | Avg: 86.67
─────────────────────────────────────────────────────
  Top Student: Charlie with an average score of 86.67
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```
