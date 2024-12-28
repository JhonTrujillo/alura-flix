import CampoTexto from '../CampoTexto'
import CampoTextArea from '../CampoTextArea'
import CampoBotones from '../CampoBotones'
import './FormularioCrearVideo.css'
import ListaCategorias from '../ListaCategorias'

const FormularioCrearVideo = () => {

    const manejarGuardar = (event) => {
        // console.log("Manejar guardado", event)
        event.preventDefault()
    }
    return <form className="formulario" onSubmit={manejarGuardar}>
        <h1 className='formulario_title'>NUEVO VIDEO</h1>
        <p className='formulario_texto'>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</p>

        <div className='formulario_container'>
            <h2 className='container_title'>Crear Tarjeta</h2>
            <div className='container_uno'>
                <CampoTexto titulo="Titulo" placeholder="Titulo Video" required/>
                <ListaCategorias titulo="Categorias" />
            </div>

            <div className='container_dos'>
                <CampoTexto titulo="Imagen" placeholder="El enlace es obligatorio" required/>
                <CampoTexto titulo="Video" placeholder="Ingrese enlace del video" required/>
            </div>

            <div className='container_tres'>
                <CampoTextArea titulo="Descripcion" placeholder="¿de que trata el video?" required/>
            </div>
            <div className='container_cuatro'>
                <CampoBotones />
            </div>
        </div>
    </form>
}

export default FormularioCrearVideo