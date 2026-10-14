// Q2. Multi-Type Data Summary
const userName = "Rohit";
const age = 20;
const isStudent = true;
const subjects = ["JavaScript", "Java", "Python"];
const student = { name: "Rohit", course: "B.Tech CSE" };
const middleName = null;
let address;

const report = [
  { label: "userName", value: userName, type: typeof userName },
  { label: "age", value: age, type: typeof age },
  { label: "isStudent", value: isStudent, type: typeof isStudent },
  { label: "subjects", value: subjects.join(", "), type: Array.isArray(subjects) ? "array" : typeof subjects },
  { label: "student", value: JSON.stringify(student), type: typeof student },
  { label: "middleName", value: middleName, type: "null" },
  { label: "address", value: String(address), type: typeof address }
];

console.table(report);
