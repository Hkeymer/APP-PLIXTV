import React from 'react'
import {requests} from "../GetMoviesApi";
import Header from '../Header/Header';
import Seccion from '../Seccion/Seccion';
import Banner from '../Banner/Banner';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from '../Footer/Footer';


const Home = () => {

 return (
    <div>
      <div>
        <Header/>
      </div>
       {(<div>
      <div>
      <Banner fetchMovie={requests.fetchTrending}/>
      <Seccion title="MOVIES ACCION" ruta ='/Peliculas/Accion' fetchmovies={requests.fetchAction} />
      <Seccion title="MOVIES ROMANCE" ruta='/Peliculas/Romance'fetchmovies={requests.fetchRomance} />
      <Seccion title="MOVIES COMEDIA" ruta ='/Peliculas/Comedia' fetchmovies={requests.fetchComedy} />
      <Seccion title="MOVIES HORROR" ruta ='/Peliculas/Horror' fetchmovies={requests.fetchHorror}/>
      <Seccion title="DOCUMENTALES" ruta='/Peliculas/Documentales' fetchmovies={requests.fetchDocumentaries}/>
      </div>
       <Footer/>
      </div> )}
    </div>
  )
}

export default Home;
