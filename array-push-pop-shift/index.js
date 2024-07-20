const planets = ['Mars', 'Earth', 'Mercury', 'Venus', 'Uranus', 'Neptune'];
console.log('Initial:');
console.table(planets);

console.log('Push:');
planets.push('Saturn');
console.table(planets);

console.log('Pop:');
planets.pop();
console.table(planets);

console.log('Shift:');
planets.shift();
console.table(planets);