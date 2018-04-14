let dibujo = document.getElementById('dibujo');
let lienzo = dibujo.getContext('2d');

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = 'red';
  lienzo.moveTo(xInicial, yInicial);
  lienzo.lineTo(xFinal,yFinal);
  lienzo.stroke();
  lienzo.closePath();
}
var resolucion = 10;
for(let i=0; i<=500; i+=resolucion) {
  dibujarLinea('red',0, i, i+resolucion,500);
  dibujarLinea('red', i, 500, 500, 500-i);
}
