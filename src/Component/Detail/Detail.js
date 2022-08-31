import React,{useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import styles from "./Slyles.module.css";
import { Link } from 'react-router-dom';
import { API_KEY } from "../GetMoviesApi";
import {BsFillPlayFill} from 'react-icons/bs';
import {AiOutlineHeart,AiTwotoneHeart} from 'react-icons/ai';
import Spinner from '../Spinner/Spiner';
import Header from '../Header/Header';
import { useDispatch, useSelector } from "react-redux";
import { getMovieFovorite } from "../../features/counter/counterSlice";
import Recomendacion from '../Recomendacion/Recomendacion';
import Footer from '../Footer/Footer';

const Base_Url= "https://image.tmdb.org/t/p/original"?
"https://image.tmdb.org/t/p/original":"https://image.tmdb.org/t/p/w500";

const Detail = () => {

  const moviesFavo = useSelector((state) => state.contenSlice.addFovorite)
  
  const {id} = useParams();
  const [movie, setMovie] = useState([])
  const dispatch = useDispatch()



  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
    .then(rest => rest.json())
    .then(data =>{
       setMovie(data)})
  },[id])


  const veryFavo = moviesFavo.find(e => e.id === movie.id ? true: false)

  const moviesFavorites = ()=>{
   if(!veryFavo){
     dispatch(getMovieFovorite(movie)) 
    }
     return;
  }

 if (!movie) {
  return null
}

  return (
    <div > 
       <div>
        <Header/>
      </div>
     {movie.length===0? <Spinner/>:<div>
     <div className={styles.Banner}
       style={{
        backgroundImage:`linear-gradient( rgba(0, 0, 0,.50) 0%,rgba(0, 0, 0,.50 )100%),
        url(${Base_Url}${movie.backdrop_path})`
      }}>
            <div className={styles.divBotones}>
            </div >
            <div className={styles.secion2}>
            <h1 >{movie.original_title}</h1>
            <div className={styles.idiomas}>Languages:{movie.spoken_languages.map(data =>
            (<h4>{data.name}</h4>))}</div>
            <div className={styles.genres} >{movie.genres.map(data =>
            (<h4>{data.name}</h4>))}</div>
            <h4 className={styles.Descripcion}>{movie.overview}</h4>
            <div className={styles.idiomas}>Release date:<h4>{movie.release_date}</h4></div>
            <div className={styles.contenbotondiv} >
             <div><button onClick={()=>{moviesFavorites()}}className={styles.button2} >
              {!veryFavo?<i><AiOutlineHeart/></i>:<i><AiTwotoneHeart /></i>}FAVORITE</button>
           <Link to={'/Play/Movie'}><button className={styles.button}> <i><BsFillPlayFill/></i>PLAY</button></Link>
           </div>
            </div>
            </div>
         
        <div className={styles.degradado}></div>
    </div> 
       <Recomendacion searchTex={movie.original_title} idM={movie.id}/>
       <Footer/>
       </div> 
       }

    </div>  
  )
}

export default Detail
