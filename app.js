import modificador from './modificador.js';

console.log(modificador);

var ingredientes = ['mel', 'água', 'sal', 'mostarda'];
var resCapitalizado = modificador.capitalizar(ingredientes);
var resOrdenado = modificador.ordenar(resCapitalizado);
var resCaixaAlta = modificador.caixaAlta(resOrdenado);

console.log(resCapitalizado);
console.log(resOrdenado);
console.log(resCaixaAlta);