const cities = [
    {name: 'Montreal', population: 1762949}, 
    {name: 'Quebec City', population: 549459}, 
    {name: 'Sherbrooke', population: 172950}
];

const total = cities.reduce((total, city) => total + city.population, 0);
console.info('Cities population: ', total);

const minCity = cities.reduce((minCity, city) => city.population < minCity.population ? city : minCity);
console.info('City with min. population: ', minCity.name, minCity.population);

const maxCity = cities.reduce((maxCity, city) => city.population > maxCity.population ? city : maxCity);
console.info('City with max. population: ', maxCity.name, maxCity.population);
