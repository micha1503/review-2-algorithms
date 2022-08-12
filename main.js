const Nombre = document.querySelector('.Nombre')
const Número = document.querySelector('.Número')
const Dirección = document.querySelector('.Dirección')
const btnAgregarTarea = document.querySelector('.btn-agregar-tarea') 

const listadoTareas = document.querySelector('.listado-tarea')

const db = window.localStorage

btnAgregarTarea.onclick = () => {
  let Contacto = {
      id: Math.random(1,100),
      Nombre: Nombre.value,
      Número: Número.value,
      Dirección: Dirección.value

  }
  guardarContacto(db, Contacto) 

}

crearContacto(db, listadoTareas)


