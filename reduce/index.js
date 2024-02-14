const cities = [{name: 'Montreal', population: 1762949}, {name: 'Quebec City', population: 549459}, {name: 'Sherbrooke', population: 172950}];
const total = cities.reduce((x,y) => x+y.population, 0);
console.info('Total population: ', total);