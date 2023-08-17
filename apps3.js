let ingredientes = ['mel', 'água', 'sal', 'mostarda'];

function capitalizar(ingredientes){
    var modificado = [];

    for(var i=0; i<ingredientes.length; i++){
        var letraInicial = ingredientes[i].charAt(0).toUpperCase();
        var restoTexto = ingredientes[i].slice(1); 
        var resultado = letraInicial+restoTexto;
        
        modificado[i] = resultado;
    }

    return modificado;
}   
    //console.log(modificado); Não funciona, pois modificado não pode ser acessado de fora da função, então:
    console.log(capitalizar(ingredientes)); //OK.

function ordenar(ingredientes){

    var ordenado = ingredientes.sort(function(a,b){
        return a.localeCompare(b);   
    });
     return ordenado;
} 
    //Como a ordenação tem que ser no vetor já capitalizado, e não no vetor ingredientes, então:
    var resCapitalizado = capitalizar(ingredientes);
    var resOrdenado = ordenar(resCapitalizado);
    console.log(resCapitalizado);
    console.log(resOrdenado);