// scripts.js

var a = prompt('Enter triangle base');
var h = prompt('Enter triangle height');
function getTriangleArea(a,h) {
  if (a>0 && h>0) {
    return a*h/2
  } else alert ('Nieprawidłowe dane');
    console.log('Wrong values, they should be bigger than 0') ;
}
console.log (getTriangleArea(a,h));
var triangle1Area = getTriangleArea(5,10),
    triangle2Area = getTriangleArea(7,14),
    triangle3Area = getTriangleArea(9,18);
console.log(triangle1Area, triangle2Area, triangle3Area);
