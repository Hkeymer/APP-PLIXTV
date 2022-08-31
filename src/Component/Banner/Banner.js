import React,{useEffect,useState} from 'react'
import styles from "./Slyles.module.css"
import Spiner from '../Spinner/Spiner';
import {BsInfoCircleFill,BsFillPlayFill } from 'react-icons/bs';
import { Link  } from "react-router-dom";

const Base_Url= "https://image.tmdb.org/t/p/original"?
"https://image.tmdb.org/t/p/original":"https://image.tmdb.org/t/p/w500";

const Banner = ({fetchMovie}) => {
  
  
    const [movie,setMovie] = useState([])
    const [loading,setLoading] = useState(true)

   useEffect(()=>{
      fetch("https://api.themoviedb.org/3/"+ fetchMovie)
      .then(rest => rest.json())
      .then(data => {
        const random = Math.floor(Math.random()*data.results.length-1)
        setMovie(data.results[random])
        setLoading(false)
      })
    },[fetchMovie])
  

 const truncate = (string , n) => string?.length > n ?`${string.substring(0,n-1)}...`:string
 
   if(loading){
    return <Spiner/>
   }

  if(!movie) {
    return null
  }
  return (
    <div className={styles.Banner}
       style={{
        backgroundImage:`linear-gradient( rgba(0, 0, 0,.50) 0%,rgba(0, 0, 0,.50 )100%),
        url(${Base_Url}${movie.backdrop_path?movie.backdrop_path:false})`
      }}>
        <h1 className={styles.title}>{movie.original_title?movie.original_title:movie.name}</h1>
            <div className={styles.botones}>
        </div>
            <div className={styles.contenbotondiv} >
            <Link to={`/Movie/Detail/${movie.id}`}  >
             <button className={styles.button}>DETAIL</button>
             </Link>
             <Link to={'/Fovorites'}  >
             <button className={styles.button}>MY LIST</button>
             </Link>
            </div>
            <h4 className={styles.Descripcion}>{truncate(movie.overview,180)}</h4>
          
          

        <div className={styles.degradado}></div>
    </div> 
  )
}

export default Banner
