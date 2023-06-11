import { useState } from "react"
import "./Formulario.css"
import Campo from "../campo"
import ListaOpciones from "../lista-Opciones"
import Boton from "../Boton"

const Formulario = (props) => {

    // creando estados
    const [nombre,actualizarNombre] =useState("")
    const [puesto,actualizarPuesto] =useState("")
    const [foto,actualizarFoto] =useState("")
    const [equipo,actualizarEquipo] =useState("")
    const [titulo,actualizarTitulo] =useState("")
    const [color,actualizarColor] =useState("")
    
    
    //destructuracion
    const {registrarColaborador,crearEquipo} = props

    //no recargar la pagina por defecto al escuchar un evento
    const manejarEnvio = (evento) => {
        evento.preventDefault()
        //creamos un objeto 
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar);
    }

    const manejarNuevoEquipo = (evento) => {
        evento.preventDefault()
        crearEquipo({titulo,colorPrimario:color})
    }

    // onSubmit bloquea el refresacmiento automatico despues de un evento  
    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo 
                titulo = "Nombre" 
                placeholder = "Ingrese Nombre" 
                required 
                valor={nombre} 
                actualizarValor={actualizarNombre}
            >
            </Campo>
    
            <Campo 
                titulo = "Puesto" 
                placeholder = "Ingrese Puesto" 
                required
                valor={puesto} 
                actualizarValor={actualizarPuesto}
            >

            </Campo>
            <Campo 
                titulo = "Foto" 
                placeholder = "Ingrese Enlace de Foto" 
                required
                valor={foto} 
                actualizarValor={actualizarFoto}
            >
            </Campo>

            <ListaOpciones
                valor = {equipo}
                actualizarValor = {actualizarEquipo}
                equipo={props.equipos}
            >
            </ListaOpciones>
            <Boton texto="Crear"></Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
        <h2>Rellena el formulario para crear nuevo equipo.</h2>
            <Campo 
                titulo = "Titulo" 
                placeholder = "Ingrese titulo" 
                required 
                valor={titulo} 
                actualizarValor={actualizarTitulo}
            >
            </Campo>
    
            <Campo 
                titulo = "Color" 
                placeholder = "Ingrese Color" 
                required
                valor={color} 
                actualizarValor={actualizarColor}
                type="color"
            >
            </Campo>
            <Boton texto="Crear equipo"></Boton>
        </form>
        </section>
}

export default Formulario