const certifications = [{name:"AZ-204", year:2023}, {name: "AZ-900", year:2022}];

// Initial
console.log("Initial:");
certifications.forEach(c => console.log(c.name, c.year));

// Insert at the start
const az400 = {name:"AZ-400", year: 2023};
const fcs = {name:"Foundational C#", year: 2023}

certifications.splice(0, 0, az400, fcs);

console.log("Inserted at the start:");
certifications.forEach(c => console.log(c.name, c.year));

// Replace the last elem
console.log("Replaced the last elem:");
const ai900 = {name:"AI-900", year:2024}

certifications.splice(certifications.length-1, 1, ai900);

certifications.forEach(c => console.log(c.name, c.year));

// Remove the last elem
console.log("Removed the last elem:");

certifications.splice(certifications.length-1, 1);

certifications.forEach(c => console.log(c.name, c.year));