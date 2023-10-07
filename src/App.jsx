import { useState, useEffect } from 'react'
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"


function App() {
  const [pacientes,setPacientes] = useState([]) //Aqui vamos a llenar los datos con los del useState que tenemos en Formulario
  const [paciente, setPaciente] = useState({})

  useEffect(() => { //Este useEffect va a obtener lo que haya en el localstorage
    const obtenerLS = () =>{
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [] // con dos ?? quiere decir, SINO, con ? quiere decir SI
      //JSON.parse sirve para convertir un string a un arreglo
      setPacientes(pacientesLS)
    }
    obtenerLS() 
  },[]) // NOTA: SI NO LE PASAS NADA DENTRO DE [] QUIERE DECIR QUE SOLO SE VA A EJECUTAR UNA VEZ

  useEffect(() => { // Creando este useEffect para poder hacer la creacion del local storage
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  },[pacientes])

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)
  }
  return (

    <div className="container mx-auto mt-10"> 
      <Header/>
      <div className="mt-12 md:flex">
          <Formulario
              pacientes = {pacientes}
              setPacientes = {setPacientes}
              paciente={paciente}
              setPaciente={setPaciente}
          />
          <ListadoPacientes
            pacientes={pacientes}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
          />
      </div>
    </div>
  )
}

export default App
