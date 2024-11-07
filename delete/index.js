"use strict";

const point3D = { x: 10, y: 10, z: 10};
console.table(point3D);

delete point3D.y;
delete point3D.z;
console.table(point3D);

// Not working in the strict mode
// var x = 100;
// delete x;
