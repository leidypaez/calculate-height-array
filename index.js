//  array a usar [4, 3, 2, 1, 3];
let vec=[];
let hight=0;
let medium=0;
for (x=0;x<=4;x++) {
  vec[x]=parseInt(prompt('Ingrese un numero'));
  if (vec[x]>hight) {
    hight=vec[x];
  }
  if (hight<=medium) {
    hight=medium;
  }
}
document.write('La altura de las velas es: ');
document.write(vec);
document.write('<br>');
document.write("altura de la vela que no pudo vola la sobrina: ");
document.write(hight);
document.write('<br>');

vec.sort((a, b) => a - b);
let length = vec.length;
length = length/2;
posicion_numero_medium = Math.floor(length)

document.write("Altura de la vela que no pudo volar la sobrina: ");
document.write(vec[posicion_numero_medium]);