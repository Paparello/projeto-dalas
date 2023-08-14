let ingredientes = ['mel', 'água', 'sal', 'mostarda'];
for(var i=0; i<ingredientes.length; i++){
    var letraInicial = ingredientes[i].charAt(0).toUpperCase();
    var restoTexto = ingredientes[i].slice(1); 
    var resultado = letraInicial+restoTexto;
    console.log(resultado);
}
