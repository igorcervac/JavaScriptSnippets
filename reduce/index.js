const all_cities = [
    {name: 'Montreal', population: 1762949}, 
    {name: 'Quebec City', population: 549459}, 
    {name: 'Sherbrooke', population: 172950},
    {name:'Gatineau', population: 284557}
];

const all_cities_population = all_cities.reduce((acc, city) => acc + city.population, 0);
console.info('All cities population: ', all_cities_population);

const all_cities_population2 = all_cities
                            .map(c => c.population)
                            .reduce((accumulator, value) => accumulator + value);
console.info('All cities population (no intial value): ', all_cities_population2);

const some_cities =  { length: 2 };
all_cities.forEach((v, i) => some_cities[i] = v);
const some_cities_population = Array.prototype.reduce.call(some_cities, (acc, city) => acc + city.population, 0);
console.info('Some cities population: ', some_cities_population);

const minCity = all_cities.reduce((minCity, city) => city.population < minCity.population ? city : minCity);
console.info('City with min. population: ', minCity.name, minCity.population);

const maxCity = all_cities.reduce((maxCity, city) => city.population > maxCity.population ? city : maxCity);
console.info('City with max. population: ', maxCity.name, maxCity.population);
