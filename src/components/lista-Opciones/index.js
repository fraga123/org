import "./listaOpciones.css";
const ListaOpciones = (props) => {
  //Metodo map -> arreglo.map( ()=>)

  const manejarCambio = (e) =>{
      console.log("cambio",e.target.value);
      props.actualizarValor(e.target.value)
  }

  return <div className="lista-opciones">
      <label>Equipos</label>
      <select value={props.valor} onChange={manejarCambio} >
        <option value="" disabled defaultValue="" hidden >Seleccionar equipo</option>
        {props.equipo.map((equipos,index) =><option value={equipos} key={index}>{equipos}</option>)}
      </select>
    </div>
  ;
};

export default ListaOpciones;
