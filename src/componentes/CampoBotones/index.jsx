const CampoBotones = (props) => {
    console.log("Datos: ", props.titulo)
    return <div className='container_botones'>
        <button className='boton_guardar'>Guardar</button>
        <button className='boton_limpiar'>Limpiar</button>
    </div>

}

export default CampoBotones