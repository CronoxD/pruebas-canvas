let dibujo = document.getElementById('dibujo');
let lienzo = dibujo.getContext('2d');

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xInicial, yInicial);
  lienzo.lineTo(xFinal,yFinal);
  lienzo.stroke();
  lienzo.closePath();
}

const tamDibujo = 500;
const resolucion = 10;
const color = 'blue';
dibujo.setAttribute("width",tamDibujo+"");
dibujo.setAttribute("height",tamDibujo+"");

for(let i=0; i<=tamDibujo; i+=resolucion) {
  dibujarLinea(color,0, i, i+resolucion,tamDibujo);
  dibujarLinea(color, i, tamDibujo, tamDibujo, tamDibujo-i);
  dibujarLinea(color, 0, i, tamDibujo-i+resolucion, 0);
  // dibujarLinea(color, 500-i)
}
