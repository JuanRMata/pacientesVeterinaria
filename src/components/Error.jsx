function Error({children}) { //Para extraer o añadir un prop, es muy importante siempre ponerlo dentro de {} y poner el nombre del prop
  return (
    <div className=" bg-red-700 p-2 text-white rounded-md text-center font-bold uppercase mb-3">
    <p>{children}</p>
    </div>
  )
}

export default Error
