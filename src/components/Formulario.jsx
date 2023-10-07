import { useState, useEffect } from "react";
import Error from "./Error";

function Formulario({  pacientes, setPacientes, paciente, setPaciente }) {
  const [nombre, setNombre] = useState("");
  //nombre es el nombre de la variable, setNombre es el que tiene que modificar esa variable
  // y lo que esta dentro de () es el valor inicial
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  const[error,setError] = useState(false)

  useEffect(() => {
      if(Object.keys(paciente).length > 0){// Object.keys sirve para poder preguntar si un arreglo esta vacio
        setNombre(paciente.nombre)
        setPropietario(paciente.propietario)
        setEmail(paciente.email)
        setFecha(paciente.fecha)
        setSintomas(paciente.sintomas)

      }
  },[paciente])


  const generarId = () => {
    const random = Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(36)
    
    return random + fecha
  }
  //Dentro de los inputs al usar useState deberemos de colocar value={nombreDeLaVariable} en este caso nombre y no setNombre que es el modificador

  const handleSubmit = (evento) => {
    //Aqui mismo podemos validar el formulario
    evento.preventDefault();
    if ( [nombre, propietario, email, fecha, sintomas ].includes('')) {
      // .includes, es para iterar dentro de cada variable y ver si alguno tiene lo que esta entre parentesis
      setError(true)
      return
    }else {
      setError(false)
      const objetoPacientes = {
        nombre,
        propietario,
        email,
        fecha,
        sintomas
      }

      if(paciente.id){ // aqui estamos viendo si estamos editando o si estamos agregando un nuevo registro
        // Editando el registro
        objetoPacientes.id = paciente.id //Aqui estamos asignandole el mismo ID que tuvo cuando se hizo el registro

        const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === 
          paciente.id ? objetoPacientes : pacienteState)

          setPacientes(pacientesActualizados)
          setPaciente({})


      }else{
        //Nuevo registro
        //ASIGNANDO UN NUEVO OBJETO A UNA COPIA DE PACIENTES QUE ANTES YA ESTABA CREADA
        objetoPacientes.id = generarId()
        setPacientes([...pacientes, objetoPacientes])
      }
      
      //REINICIANDO EL FORMULARIO
      setNombre('')
      setPropietario('')
      setEmail('')
      setFecha('')
      setSintomas('')
    }

  }

  return (
    <div className=" md:w-1/2 lg:w-2/5 mx-5">
      <h1 className=" font-black text-3xl text-center">
        Seguimiento Pacientes
      </h1>

      <p className=" text-lg mt-5 text-center mb-5">
        Añade Pacientes y {""}
        <span className=" text-indigo-500 font-bold">Administralos</span>
      </p>

      <form
        className=" bg-white shadow-md rounded-md py-5 px-5 mx-5 mb-5"
        onSubmit={handleSubmit} //handleSubmit es el nombre de la variable que se va a encontrar en JS el cual va a contener la funcion del onSubmit
      >
        {/* && es como un if, quiere decir que si la variable error es true va a ejecutar el componente importado <Error/>> */}
        {/*Aqui se crea un prop al cual le llamamos mensaje, para poderlo replicar en mas partes de esta pagina  */}

        {/*{error && <Error mensaje='Todos los campos son obligatorios'/>}*/} 

        {/*Esta es una forma de utilizarlo ya dentro del archivo Error.jsx tendremos que especificar el prop mensaje 
        asi como tambien mandar a llamar la prop dentro de donde queramos que este actuando */}

        {error && <Error>

                <p>Todos los campos son obligarotios</p>
            
            </Error>}
        {/* Al hacerlo de esta forma abriendo y cerrando la etiqueta del componente Error podemos insertar mas codigo html solo que
        para poder llamarlo dentro del archivo Error.jsx tendremos que especificarlo con la palabra reservada children*/}


        <div className=" mb-5">
          <label
            htmlFor="mascota"
            className=" block font-bold uppercase text-gray-700"
          >
            Nombre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(evento) => setNombre(evento.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className=" block font-bold uppercase text-gray-700"
          >
            Nombre propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del Propietario"
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={(evento) => setPropietario(evento.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className=" block font-bold uppercase text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="example@example.com"
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(evento) => setEmail(evento.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta"
            className=" block font-bold uppercase text-gray-700"
          >
            Alta
          </label>
          <input
            id="alta"
            type="date"
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(evento) => setFecha(evento.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className=" block font-bold uppercase text-gray-700"
          >
            Sintomas
          </label>

          <textarea
            id="sintomas"
            className=" w-full p-2"
            placeholder="Añade los sintomas"
            value={sintomas}
            onChange={(evento) => setSintomas(evento.target.value)}
          />
        </div>

        <input
          type="submit"
          className=" bg-indigo-500 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 rounded-md cursor-pointer transition-all"
          value={paciente.id ? 'Editar paciente' : 'Agregar paciente'}
        />
      </form>
    </div>
  );
}
//NOTAS: Al poner htmlFor="id_nombre" sirve para poder hacer una vinculacion de ese elemento a otro, es decir al hacer click en el label que contiene
// La palabra Nombre Mascota, te redirecciona al input ya que estas vinculando el id previamente puesto en el htmlFor al id del input
// overflowscroll, permite que solamente se haga scroll dentro del contenedor que queremos, sin afectar toda la pagina
export default Formulario;
