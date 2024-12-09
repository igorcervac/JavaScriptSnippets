const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

Array.prototype.forEach.call(weekDays, function(d, i){
    console.log(i+1, d);
});