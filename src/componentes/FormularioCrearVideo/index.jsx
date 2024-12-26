import './FormularioCrearVideo.css'
const FormularioCrearVideo = () => {
    return <div className="formulario">
        <h1 className='formulario_title'>NUEVO VIDEO</h1>
        <p className='formulario_texto'>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</p>

        <div className='formulario_container'>
            <h2 className='container_title'>Crear Tarjeta</h2>
            <div className='container_uno'>
                <div className='container_subcontainer'>
                    <label htmlFor="" className='container_label'>Titulo</label>
                    <input type="text" placeholder="Titulo Video" className='container_input' />
                </div>
                <div className='container_subcontainer'>
                    <label htmlFor="" className='container_label'>Categoria</label>
                    <input type="text" placeholder="Selecciona una categoria" className='container_input' />
                </div>
            </div>

            <div className='container_dos'>
                <div className='container_subcontainer'>
                    <label htmlFor="" className='container_label'>Imagen</label>
                    <input type="text" placeholder="El enlace es obligatorio" className='container_input' />
                </div>
                <div className='container_subcontainer'>
                    <label htmlFor="" className='container_label'>Video</label>
                    <input type="text" placeholder="Ingrese enlace del video" className='container_input' />
                </div>
            </div>
            <div className='container_tres'>
                <div className='container_subcontainer'>
                    <label htmlFor="" className='container_label'>Descripcion</label>
                    <textarea name="" id="" placeholder='¿de que trata el video?' className='container_input'></textarea>
                </div>
            </div>
            <div className='container_cuatro'>
                <div className='container_botones'>
            <button className='boton_guardar'>Guardar</button>
            <button className='boton_limpiar'>Limpiar</button>
            </div>
            </div>
        </div>
    </div>
}

export default FormularioCrearVideo