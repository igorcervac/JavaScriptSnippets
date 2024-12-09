const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

console.log('Call');
Array.prototype.forEach.call(weekDays, function(d, i){
    console.log(i+1, d);
});

console.log('Apply');
Array.prototype.forEach.apply(weekDays, [function(d, i){
    console.log(i+1, d);
}]);

console.log('Bind');
Array.prototype.forEach.bind(weekDays)(function(d, i){
    console.log(i+1, d);
});