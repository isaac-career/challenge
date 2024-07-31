let a = {};
let b = a;

a.propiedad = 'a';

console.log(a, b);
let r = true;
if (a ===b) r=true;
console.log('comparision = ' + r)