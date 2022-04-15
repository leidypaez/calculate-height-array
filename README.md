# calculate-height-array
__________________________________________________________________
## PROBLEMA

usted esta a cargo del pastel para el cumpleaños de su sobrina y ha decidido que
el pastel tendra una vela por cada año de su edad total. cuando ella apaque las velas,
solo podra apagar las mas altas, tu tarea es averiguar cuantas velas puede apagar 
con exito.
- tenemos 4 -4 -1-3 de los cuales solo 2 numeros se muestras ya que son los menores 
si tu sobrina esta girando 4 años y la tarta tendra 4 velas de altura 4.4.1.3 ella 
sera capas de volar 2 velas con exito, ya que las velas mas altas son de altura 4 
y aqui estan 2 tales velas

## Descripcion de las variables (vec - hight - medium)
 __Entrada de los datos:__

 - Con estas variables se inializa el proceso en 0 la variable --> vec <-- es la que tiene nuestro array y que el usuario puede cambiar los 5 valores que se del array 
 - los valores principales del array son: [4, 3, 2, 1, 3]


```javascript
let vec=[];
let hight=0;
let medium=0;
```
__Proceso de los datos:__

 -  Se crea un ciclo for para darle al usuario el ingreso de los datos que quiera realizar, donde dentro del ciclo se pone una condicion para que nos del el resultado correspondiente que es 2 velas (segun el ejemplo)

```javascript
for (x=0;x<=4;x++) {
  vec[x]=parseInt(prompt('Ingrese un numero'));
  if (vec[x]>hight) {
    hight=vec[x];
  }
  if (hight<=medium) {
    hight=medium;
  }
}
```

__Salida de los datos:__
-  Es la muestra de los datos mediante unos document.write y llamando a las variables para que nos generen el resultado final del array 
```javascript
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
```
_________
![imagen](https://github.com/leidypaez/calculate-height-array/blob/main/img/img.png)