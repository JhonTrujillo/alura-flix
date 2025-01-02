import Header from "../componentes/Header"
import Footer from "../componentes/Footer"
import FormularioCrearVideo from "../componentes/FormularioCrearVideo"
import CampoTexto from "../componentes/CampoTexto"
import CampoTextArea from "../componentes/CampoTextArea"
import CampoBotones from "../componentes/CampoBotones"
import ListaCategorias from "../componentes/ListaCategorias"

const EditarVideo = () => {
   return <div>
        <Header />
        <div className='formulario_container'>
            <h2 className='container_title' style={{color:"black"}}>Editar Tarjeta</h2>
            <div className='container_uno'>
                <CampoTexto titulo="Titulo" placeholder="Titulo Video" required />
                <ListaCategorias titulo="Categorias" />
            </div>

            <div className='container_dos'>
                <CampoTexto titulo="Imagen" placeholder="El enlace es obligatorio" required />
                <CampoTexto titulo="Video" placeholder="Ingrese enlace del video" required />
            </div>

            <div className='container_tres'>
                <CampoTextArea titulo="Descripcion" placeholder="¿de que trata el video?" required />
            </div>
            <div className='container_cuatro'>
                <CampoBotones />
            </div>
        </div>
        <Footer />
   </div>
}

export default EditarVideo