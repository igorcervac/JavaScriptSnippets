const original = {name: 'Liverpool', year: 1892, players: ['Alisson Becker','Virgil Van Dijk']};
console.log('Original:', original);

const spread_copy = {...original};
const assign_copy = Object.assign({}, original);
const stringify_copy = JSON.parse(JSON.stringify(original));

original.name = 'Liverpool updated';
original.players[0] = 'Diogo Jota';
console.log('Changed:', original);

console.group('Shallow copy');
console.log(spread_copy);
console.log(assign_copy);
console.groupEnd();

console.group('Deep copy');
console.log(stringify_copy);
console.groupEnd();

