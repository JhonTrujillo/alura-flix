import './cardvideo.css'

const Cardvideo = () => {
    return <div className="card">
               <div className="card-video">
                    <img src="./usuario.avif" alt="usuario" className='card-img'/>
               </div>
               <div className='card-button'>
                    <button className='button-borrar'>Borrar</button>
                    <button className='button-editar'>Editar</button>
               </div>
            </div>
}

export default Cardvideo