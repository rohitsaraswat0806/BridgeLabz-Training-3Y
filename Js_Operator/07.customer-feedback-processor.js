// Q7. Customer Feedback Processor

// Feedback received from a customer
const feedback = "Great product! Fast delivery and amazing sound quality!";

// Split the feedback into words and count them
const words = feedback.trim().split(/\s+/);
const wordCount = words.length;

// Convert to lowercase so checks are case-insensitive
const lowerCaseFeedback = feedback.toLowerCase();
const containsNegativeWords =
    lowerCaseFeedback.includes("bad") || lowerCaseFeedback.includes("poor");

// Display the feedback analysis
console.log(`Feedback: ${feedback}`);
console.log(`Word count: ${wordCount}`);

if (containsNegativeWords) {
    console.log("Needs Improvement");
} else {
    console.log("Positive Feedback");
}
