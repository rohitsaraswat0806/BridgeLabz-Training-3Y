// Q2. String Manipulation Report

// Product name with extra spaces
const productName = " wireless headphones PRO ";

// Trim spaces and convert the title to lowercase
const trimmedName = productName.trim().toLowerCase();

// Capitalize the first letter of each word using split(), map(), and join()
const capitalizedName = trimmedName
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

// Replace "Pro" with "Pro Edition"
const cleanedTitle = capitalizedName.replace("Pro", "Pro Edition");

// Display the cleaned title and its length
console.log(`Cleaned title: ${cleanedTitle}`);
console.log(`Title length: ${cleanedTitle.length}`);
