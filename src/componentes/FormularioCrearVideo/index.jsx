import CampoTexto from '../CampoTexto'
import CampoTextArea from '../CampoTextArea'
import CampoBotones from '../CampoBotones'
import './FormularioCrearVideo.css'

const FormularioCrearVideo = () => {
    return <div className="formulario">
        <h1 className='formulario_title'>NUEVO VIDEO</h1>
        <p className='formulario_texto'>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</p>

        <div className='formulario_container'>
            <h2 className='container_title'>Crear Tarjeta</h2>
            <div className='container_uno'>
                <CampoTexto titulo="Titulo" placeholder="Titulo Video" />
                <CampoTexto titulo="Categoria" placeholder="Seleccione una categoria" />
            </div>

            <div className='container_dos'>
                <CampoTexto titulo="Imagen" placeholder="El enlace es obligatorio" />
                <CampoTexto titulo="Video" placeholder="Ingrese enlace del video" />
            </div>

            <div className='container_tres'>
               <CampoTextArea titulo="Descripcion" placeholder="¿de que trata el video?"/>
            </div>
            <div className='container_cuatro'>
                <CampoBotones/>
            </div>
        </div>
    </div>
}

export default FormularioCrearVideo