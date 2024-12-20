// import logo from './logo.svg';
import './App.css';
import Header from './componentes/Header/index';
import Banner from './componentes/Banner/index';
import Footer from './componentes/Footer';
import Equipo from './componentes/Equipo';
// import Cardvideo from './componentes/Cardvideo';



function App() {
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
  return (
    <div className="App">
      <Header></Header>
      <Banner />
        {
          equipos.map((equipo) => {
            // console.log("Equipo:", equipo)
            return <Equipo datos={equipo} key={equipo.titulo}/>
            })
        }
      <Footer />
    </div>
  );
}

export default App;
