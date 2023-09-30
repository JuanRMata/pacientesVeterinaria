
function Header (){ // La forma de leer las propiedades de un componente se utiliza la palabra reservada props
//tambien podemos destructurar las propiedades usando {} ejemplo function Header ({nombre}) aqui solo vamos a obtener el valor de la propiedad nombre

    //las comillas Seguimientos Pacientes {""} solo son para darles un espacio, cabe recordar que lo que esta dentro de las llaves es codigo JS
    // La clase md hace referencia a la media query, para que tenga un diseño mas responsive ejemplo md:w-2/3 ahi dice, media:s(width-66%)
    //Para llamar a una funcion que esta como prop se puede hacer de la forma normal
    return(
            <h1 className=" text-5xl font-black text-center md:w-2/3 mx-auto">
                Seguimientos Pacientes {""} 
                <span className=" text-indigo-500">Veterinaria</span>
            </h1>
    )
}
export default Header