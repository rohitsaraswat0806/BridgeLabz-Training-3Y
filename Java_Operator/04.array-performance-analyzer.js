// Q4. Array Performance Analyzer

// Generate 8 random integer scores from 30 through 100
const scores = Array.from({ length: 8 }, () =>
    Math.floor(Math.random() * 71) + 30
);

// Find the highest and lowest scores
const highestScore = Math.max(...scores);
const lowestScore = Math.min(...scores);

// Calculate the average with reduce()
const totalScore = scores.reduce((sum, score) => sum + score, 0);
const averageScore = totalScore / scores.length;

// Use filter() to count students who passed
const passedStudents = scores.filter(score => score >= 50).length;

// Use map() to create a numbered list of scores
const scoreReport = scores.map((score, index) =>
    `Student ${index + 1}: ${score}`
);

// Display the full summary
console.log(`Array Performance Analyzer
Scores: ${scores.join(", ")}
${scoreReport.join("\n")}
Highest score: ${highestScore}
Lowest score: ${lowestScore}
Average score: ${averageScore.toFixed(2)}
Students passed (score >= 50): ${passedStudents} out of ${scores.length}`);
