import {cargarFichas} from './cargarJSON.js';
import {renderFicha} from './renderFicha.js';

let fichas = [];
let fichaActual = null;

document.addEventListener('DOMContentLoaded', async () => {
  fichas = await cargarFichas();

  const btn = document.getElementById('loteria_btn');
  btn.addEventListener('click', () => {
    const input = document.getElementById('inputNumeroFicha');
    const numeroIngresado = parseInt(input.value, 10);

    fichaActual = fichas.find(f => f.id === numeroIngresado);
    if (!fichaActual) {
      console.log(`❌ Ficha con número ${numeroIngresado} no encontrada`);
      mostrarModalError("Fuera de rango", "warning"); 
      
      return;
    }

    // Renderizar ficha en pantalla principal
    renderFicha(fichaActual);
    
    //ficha a la cola
    // Agregar ficha cantada a la cola
    

  });
  //FIN BLOQUE DE CODIGO DEL BOTON CANTAR LOTERIA
  
  //CANTAR modal-victoria
    
    
  // Borrar ficha con input.
  
});