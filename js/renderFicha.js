export function renderFicha(ficha) {
  console.log('📍 Iniciando renderFicha');

  // 🧠 Validación de ficha
  if (!ficha || !ficha.imagen || !ficha.nombre) {
    console.error('❌ Ficha inválida:', ficha);
    return;
  }

  // 📌 Acceso al contenedor visual
  const contenedor = document.getElementById('fichaCantada');
  const contenedor2 = document.getElementById('fichaCantada2');
  if (!contenedor) {
    console.error('❌ No se encontró el contenedor #fichaCantada');
    return;
  }

  // 🧹 Limpieza previa
  contenedor.innerHTML = '';
  contenedor2.innerHTML = '';

  try {
    // 🎯 Creación del div principal
    const fichaDiv = document.createElement('div');
    fichaDiv.classList.add('ficha-proyectada');
    console.log('✅ Div ficha-proyectada creado');
    
    // Creacion del div para ficha clasicas
    const fichaDiv2 = document.createElement('div');
    //fichaDiv.classList.add('ficha-proyectada');
    console.log('Div ficha-proyectada2 creadp');
    
    // 🖼️ Imagen de la ficha
    const img = document.createElement('img');
    img.src = `./img/${ficha.imagen}`;
    img.alt = ficha.nombre;
    img.classList.add('ficha-img');

    // 🏷️ Nombre de la ficha 2
    const nombre = document.createElement('div');
    //nombre.textContent = ficha.nombre;
    //nombre.classList.add('ficha-nombre');

    // 🖼️ Imagen de la ficha   2 
    const img2 = document.createElement('img');
    img2.src = `./img/${ficha.imagen2}`;
    img2.classList.add('ficha-img');

    

    // 🧩 Ensamblaje visual
    fichaDiv.appendChild(img);
    fichaDiv.appendChild(nombre);
    contenedor.appendChild(fichaDiv);
    
    fichaDiv2.appendChild(img2);
    contenedor2.appendChild(fichaDiv2);
    const nombre_ficha = document.getElementById('nombre_ficha');
    window.ficha = ficha;
    nombre_ficha.textContent = window.ficha.nombre;

    console.log('✅ Ficha renderizada correctamente:', ficha.nombre);
  } catch (error) {
    console.error('❌ Error durante el renderizado de ficha:', error);
  }
}
