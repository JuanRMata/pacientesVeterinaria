import Pacientes from "./Pacientes"

function ListadoPacientes({pacientes}) { //Aqui estamos extrayendo el prop de pacientes
  
  return (
    <div className=" md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll mx-5">
      <h1 className=" font-black text-center text-3xl mb-5">
        Listado Pacientes
      </h1>
      <p className=" text-lg text-center mb-5">
        Administra tus {""}
        <span className=" text-indigo-500 font-bold">Pacientes y citas</span>
      </p>
        { pacientes.map( ()=>{

          return(
            <h1>Desde map</h1>
          )
        })}
        <Pacientes/>
    </div>
  )
}

export default ListadoPacientes;
