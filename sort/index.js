const certifications = [
    {id:1, title:'AZ-204', year:2023}, 
    {id:2,title:'AZ-400', year:2023},
    {id:3,title:'AZ-900', year:2022}
];
console.log('inital:', certifications);

const sortBy = (arr, key) => arr.toSorted((obj, obj2) => obj[key] < obj2[key] ? -1 : 1);

const sortedCertifications = sortBy(certifications, 'year');
console.log('sorted:', sortedCertifications);
