import modificador from './modificador.js';
import ingredientes from './ingredientes.js';

//var ingredientes = ['mel', 'água', 'sal', 'mostarda'];
//modificador.capitNovo(ingredientes, 'nome');

let ingredientesOrdenados = modificador.ordemNovo(ingredientes, 'nome');
let ingredientesCapitalizados = modificador.capitNovo(ingredientes, 'nome');
let containerIngredientes = document.getElementById('container-ingredientes');

for(let ingrediente of ingredientesOrdenados){
    let textoHTML = `<div class="ingrediente">
            <img src="img/${ingrediente.img}"/>
            <p class="nome-ingrediente">${ingrediente.nome}</p>
        </div>`;
        containerIngredientes.innerHTML += textoHTML;
}


/* TEMPLATE STRING:
<div class="ingrediente">
        <img src="img/carne.png" alt="carne"/>
        <p class="nome-ingrediente">Carne</p>
</div>
*/

