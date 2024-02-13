const clubs = [{name: 'Liverpool', country:'England'}, {name: 'Arsenal', country:'England'}, {name: 'Juventus', country:'Italy'}];

const byCountryFilter = country => club => club.country == country;

const englishClubs = clubs.filter(byCountryFilter('England'));

englishClubs.forEach(c => console.log(c.name, c.country));