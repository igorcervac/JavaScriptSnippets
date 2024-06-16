let az204 = {
    name: 'AZ-204',
    year: 2024
};
console.log('az204', az204);

let az400_created = Object.create(az204);
console.log('az400_created', az400_created);

let az204_assigned = Object.assign(az204);
console.log('az204_assigned', az204_assigned);
