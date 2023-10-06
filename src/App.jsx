import { useState } from 'react'
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"


function App() {
  const [pacientes,setPacientes] = useState([]) //Aqui vamos a llenar los datos con los del useState que tenemos en Formulario
  const [paciente, setPaciente] = useState({})

  return (

    <div className="container mx-auto mt-10"> 
      <Header/>
      <div className="mt-12 md:flex">
          <Formulario
              pacientes = {pacientes}
              setPacientes = {setPacientes}
              paciente={paciente}
          />
          <ListadoPacientes
            pacientes={pacientes}
            setPaciente={setPaciente}
          />
      </div>
    </div>
  )
}

export default App
