const CampoTextArea = (props) => {
    // console.log("Datos: ", props.titulo)
    return <div className='container_subcontainer'>
    <label htmlFor="" className='container_label'>{props.titulo}</label>
    <textarea name="" id="" placeholder={props.placeholder} className='container_input'></textarea>
</div>
    
}

export default CampoTextArea