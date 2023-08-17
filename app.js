import capitalizar from './modificador.js';
import ordenar from './modificador.js';

let ingredientes = ['mel', 'água', 'sal', 'mostarda'];

    var resCapitalizado = capitalizar(ingredientes);
    var resOrdenado = ordenar(resCapitalizado);

    console.log(resCapitalizado);
    console.log(resOrdenado);