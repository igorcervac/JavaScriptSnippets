const certificate = { 
    title: 'AI-900', 
    year: 2024, 
    location: { city: 'Montreal'}, 
    expiration: { year: 2025 } 
};

const { title: code, year: earned, location: { city }, expiration: { year: expired}, price = 100.00 } = certificate;
console.table({code, earned, city, expired, price});