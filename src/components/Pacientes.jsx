


function Pacientes({paciente,setPaciente}) {

  const { nombre, propietario, email, fecha, sintomas } = paciente
  return (
    <div className=" bg-white shadow-md mx-5 px-5 py-10 rounded-md mb-5">
      <p className=" font-bold mb-3 text-gray-700 uppercase">
        Nombre {""}
        <span className="font-normal normal-case">{nombre}</span>
      </p>
      <p className=" font-bold mb-3 text-gray-700 uppercase">
        Propietario {""}
        <span className="font-normal normal-case">{propietario}</span>
      </p>
      <p className=" font-bold mb-3 text-gray-700 uppercase">
        Email {""}
        <span className="font-normal normal-case">{email}</span>
      </p>
      <p className=" font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta {""}
        <span className="font-normal normal-case">{fecha}</span>
      </p>
      <p className=" font-bold mb-3 text-gray-700 uppercase">
        Síntomas {""}
        <span className="font-normal normal-case">
          {sintomas}
        </span>
      </p>
      <div className=" flex justify-end">
        <button 
          type="button" 
          className=" bg-red-500 rounded-md text-white font-bold px-5 py-2 uppercase hover:bg-red-700 transition-all">
          Eliminar
        </button>

        <button 
          type="button" 
          className=" bg-indigo-500 rounded-md text-white font-bold px-5 py-2 uppercase ml-5 hover:bg-indigo-700 transition-all"
          onClick={()=>{ // Lo ponemos como funcion para que asi el useState se espere y se llene justo cuando se de click al boton editar
            setPaciente(paciente)
          }}>
          Editar
        </button>
      </div>

    </div>
  );
}

export default Pacientes;
