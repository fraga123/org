import "./Colaborador.css"
import {AiFillCloseCircle,AiOutlineHeart,AiFillHeart} from "react-icons/ai"

const Colaborador = (props)=>{
    // destructuracion
    const {nombre,puesto, foto,equipo,id,fav} =props.datos
    const {colorPrimario,eliminarColaborador,like} = props

    const estiloCard ={
        backgroundColor: colorPrimario
    }

    return <div className="colaborador">
        <AiFillCloseCircle className="eliminar" onClick={() => eliminarColaborador(id)}></AiFillCloseCircle>
        <div className="encabezado" style={estiloCard}>
            <img src={foto} alt={nombre}/>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {
                fav ? <AiFillHeart 
                    color="red"
                    onClick={() => like(id)}
                >
                </AiFillHeart>:<AiOutlineHeart
                    onClick={() => like(id)}
                >
                </AiOutlineHeart>
            }
            
            
        </div>
    </div> 
}

export default Colaborador


// https://github.com/harlandlohora.png

// https://github.com/genesysaluralatam.png

// https://github.com/JeanmarieAluraLatam.png

// https://github.com/christianpva.png

// https://github.com/JoseDarioGonzalezCha.png
