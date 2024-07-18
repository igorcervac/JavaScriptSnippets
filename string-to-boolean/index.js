const stringValues = ['true', 'false', 'True', 'False', 'TRUE', 'FALSE', '', null, undefined];
const booleanValues = stringValues.map(parseBoolean);
console.table(booleanValues);

function parseBoolean(stringValue){
    return JSON.parse((stringValue || 'false').toLowerCase());
}
