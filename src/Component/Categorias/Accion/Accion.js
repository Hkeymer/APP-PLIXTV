import React,{useState,useEffect} from 'react'
import Header from "../../Header/Header"
import { requests } from "../../GetMoviesApi";
import Spiner from '../../Spinner/Spiner';
import Grid from '../../Grid/Grid';
import Categorias from "../Categorias";
import Footer from "../../Footer/Footer";


const Accion = () => {

  const [movies, setMovies] = useState([])

  useEffect(()=>{
    fetch("https://api.themoviedb.org/3/" +requests.fetchAction)
    .then(rest => rest.json())
    .then(data => {
      setMovies(data.results)
    })},[])
  
  return (
    <div>
        <div>
      <Header/>
      </div>
      <div>
      <Categorias/>
      {movies.length=== 0? <Spiner/>:<Grid moviesCard={movies} title={"MOVIE ACCION"} />}
    </div>
    <Footer/>
    </div>
  )
}

export default Accion
