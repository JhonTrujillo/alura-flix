// import ModalZoom from "../ModalZoom"
import FormularioCrearVideo from '../FormularioCrearVideo'
import './cardvideo.css'


// //Evento Modal
   const ModalEditar = (event) => {
        console.log("Modal Editar")
        return <><dialog open>
            <form method="dialog" className="modal">
                 <FormularioCrearVideo/>
                <button>OK</button>
            </form>
       </dialog>
       </>
    }
 

const Cardvideo = () => {
     return <div className="card" >
          <div className="card-video">
               <img src="./usuario.avif" alt="usuario" className='card-img' />
          </div>
          <div className='card-button'>
               <button className='button-borrar'>Borrar</button>
               <button className='button-editar' onClick={ModalEditar}>Editar</button>
          </div>
     </div>
}

export default Cardvideo