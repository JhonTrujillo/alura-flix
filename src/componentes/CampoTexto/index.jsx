const CampoTexto = (props) => {
    console.log("Datos: ", props.titulo)
    return <div className='container_subcontainer'>
        <label htmlFor="" className='container_label'>{props.titulo.toUpperCase()}</label>
        <input type="text"  className='container_input' placeholder={props.placeholder}/>
    </div>
    
}

export default CampoTexto