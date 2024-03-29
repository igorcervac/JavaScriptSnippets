const certifications = [
    {id:1, title:'AZ-204', year:2023}, 
    {id:2,title:'AZ-400', year:2023},
    {id:3,title:'AZ-900', year:2022}
];

const pluck = (array, key) => array.map(obj => obj[key]);

const titles = pluck(certifications, 'title');
const years = pluck(certifications, 'year');

console.log(titles);
console.log(years);


