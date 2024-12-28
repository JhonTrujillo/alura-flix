import './equipo.css'
import react from 'react'
import Cardvideo from "../Cardvideo"
const Equipo = (props) => {
     
    return <section className="equipo">
        <h3 className='equipo-title' style={{backgroundColor: props.datos.colorprimario}}>{props.datos.titulo}</h3>
        <div className="equipo-card" >
           <Cardvideo />
            {/* <Cardvideo />
            <Cardvideo />
            <Cardvideo />
            <Cardvideo />
            <Cardvideo /> */}
        </div>
    </section>
}

export default Equipo