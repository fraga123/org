import "./MiOrg.css"
import { useState } from "react" 
const MiOrg= (props)=>{
    //estado-hooks (useState)-> utiliza el estado
    //useState()
    // const [mostrar,actualziarMostrar] = useState(true)
    // const manejarClick = ()=>{
    //     actualziarMostrar()
    // }

    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src ="/img/add.png" alt="add" onClick={props.cambiarMostrar}/> 

    </section>
}

export default MiOrg