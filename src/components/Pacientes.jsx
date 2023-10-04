


function Pacientes({paciente}) {

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
          {paciente.sintomas}
        </span>
      </p>
    </div>
  );
}

export default Pacientes;
