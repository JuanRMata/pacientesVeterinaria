import Pacientes from "./Pacientes"

function ListadoPacientes({pacientes}) { //Aqui estamos extrayendo el prop de pacientes desde Formulario
  
  return (
    <div className=" md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll mx-5">
      {pacientes && pacientes.length ?  
      <>
      <h1 className=" font-black text-center text-3xl mb-5">
      Listado Pacientes
    </h1>
    <p className=" text-lg text-center mb-5">
      Administra tus {""}
      <span className=" text-indigo-500 font-bold">Pacientes y citas</span>
    </p>
      { pacientes.map( paciente=>
          <Pacientes
            key={paciente.id} // Aqui tenemos que establecer el id previo que generamos para que su apartado en el formulario cuente con el mismo id
            paciente = {paciente}
          
          />
        
      )}
      </>
      :
      <>
      <h1 className=" font-black text-center text-3xl mb-5">
      No hay Pacientes
    </h1>
    <p className=" text-lg text-center mb-5">
      Comienza a agregar tus pacientes {""}
      <span className=" text-indigo-500 font-bold">y apareceran aqui</span>
    </p>
    </>
    }
      
        
    </div>
  )
}

export default ListadoPacientes;
