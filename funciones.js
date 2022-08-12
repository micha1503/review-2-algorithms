const guardarContacto = (db, Contacto) =>{
    db.setItem(Contacto.id, JSON.stringify(Contacto))
    window.location.href = '/'

}

const cargarContactos = () =>{
    let claves = object.keys(db)
    
     for(clave of claves){
         let contacto = Json.parse(db.getItem(claves))
         crearContacto(parentNode, contacto, db )
          
     }
}      

 const crearContacto = (parentNote, Contacto, db) =>{

    let divContacto = document.createElement('div')
    let NombreContacto = document.createElement('h3')
    let NúmeroContacto = document.createElement('p')
    let DirecciónContacto = document.createElement('p')
    let iconoBorrar = document.createElement('span')


    NombreContacto.innerHTML = Contacto.nombre
    NúmeroContacto.innerHTML = Contacto.número
    DirecciónContacto.innerHTML = Contacto.direcciónContacto
    iconoBorrar.innerHTML = 'delete forever'
  
    divContacto.calassList.add('tarea')
    iconoBorrar.classList.add('material-icons', 'icono')

    iconoBorrar.onclick = () =>{
    db.removeItem(Contacto.id)
    window.location.href = '/'
    }

    divContacto.appendChild(NombreContacto)
    divContacto.appendChild(NúmeroContacto)
    divContacto.appendChild(DirecciónContacto)
    divContacto.appendChild(iconoBorrar)

    parentNote.appendChild(divContacto)




     


 }