import './ListaCategorias.css'
const ListaCategorias = (props) => {
    return <div className='container_subcontainer'>
        <label htmlFor="" className='subcontainer_titleCategoria'>{props.titulo.toUpperCase()}</label>
        <select name="" id="" className="categorias">
            <option value="">Front End</option>
            <option value="">Back End</option>
            <option value="">Innovacion y Gestion</option>
        </select>
    </div>
    
}

export default ListaCategorias