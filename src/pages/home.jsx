 import Banner from "../componentes/Banner"
 import Header from "../componentes/Header"
 import Footer from "../componentes/Footer"
 import Equipo from "../componentes/Equipo"
import ModalZoom from "../componentes/ModalZoom"


  //Lista de Equipos
const equipos =[
    {
      titulo:  "FRONT END",
      colorprimario : "#2271D1"
    },
    {
      titulo:"BACK END",
      colorprimario : "#52BE80"
    },
    {
      titulo:"INNOVACION Y GESTION",
      colorprimario : "#F7DC6F"
    }
  ]
const Home = () => {
    return<div>
        <Header />
        <Banner />
        {
            equipos.map((equipo) => {
              // console.log("Equipo:", equipo)
             return <Equipo datos={equipo} key={equipo.titulo}/>
            })
          } 
          <ModalZoom />
        <Footer /> 
    </div> 
}

export default Home