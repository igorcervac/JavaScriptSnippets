const cities = [
    {name: 'Montreal', population: 1762949}, 
    {name: 'Quebec City', population: 549459}, 
    {name: 'Sherbrooke', population: 172950}
];

const three_cities_population = cities.reduce((acc, city) => acc + city.population, 0);
console.info('Three cities population: ', three_cities_population);

const populations = cities.map(c => c.population);
const three_cities_population2 = populations.reduce((accumulator, value) => accumulator + value);
console.info('Three cities population (no intial value): ', three_cities_population2);

const two_cities =  { length: 2 };
cities.forEach((v, i) => two_cities[i] = v);
const two_cities_population = Array.prototype.reduce.call(two_cities, (acc, city) => acc + city.population, 0);
console.info('Two cities population: ', two_cities_population);

const minCity = cities.reduce((minCity, city) => city.population < minCity.population ? city : minCity);
console.info('City with min. population: ', minCity.name, minCity.population);

const maxCity = cities.reduce((maxCity, city) => city.population > maxCity.population ? city : maxCity);
console.info('City with max. population: ', maxCity.name, maxCity.population);
