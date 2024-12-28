import './ListaCategorias.css'
const ListaCategorias = (props) => {

    const categorias = [
        "Front End",
        "Back End",
        "Innovacion y Gestion"
    ]
    
    return <div className='container_subcontainer'>
        <label htmlFor="" className='subcontainer_titleCategoria'>{props.titulo.toUpperCase()}</label>
        <select name="" id="" className="categorias">
            {categorias.map((categoria, index) => {
                return <option value="" key={index}>{categoria}</option>
            })}
        </select>
    </div>
    
}

export default ListaCategorias