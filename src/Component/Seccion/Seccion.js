import React,{useRef,useState,useEffect} from "react";
import Slider from "react-slick";
import {Link}  from "react-router-dom";
import {AiOutlinePlayCircle} from 'react-icons/ai';
import {FcNext} from 'react-icons/fc';
import {IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import styles from "./Slyles.module.css";
import Spiner from "../Spinner/Spiner"

const Base_Url= "https://image.tmdb.org/t/p/original"?
"https://image.tmdb.org/t/p/original":"https://image.tmdb.org/t/p/w500";


const Seccion = ({title,ruta,fetchmovies}) => {

  const [movie ,setMovie] = useState([])
  
  useEffect(()=>{
    fetch("https://api.themoviedb.org/3/"+fetchmovies )
    .then(data =>  data.json())
    .then(rest => setMovie(rest.results) )
 },[fetchmovies])
          
 console.log(movie)
   const sliderhow = useRef(null);

   const truncate = (string , n) => string?.length > n ?`${string.substring(0,n-1)}...`:string
   if(movie.length===0){
       return (<Spiner/>)
   }
   if (!movie) {
    return null
     }

     var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

  return (
    <div>
        <div className={styles.contentex} >
        <h2 >{title}</h2>
        <Link to={ruta}>Ver todo <i><FcNext/><FcNext/></i></Link>
        </div>
      <div  className={styles.conten} > 
      <Slider ref={sliderhow}
         {...settings} 
         className={styles.Slider}>
         {movie.map(data => !data.backdrop_path? false:
           (<div className={styles.card} >
          <Link to={`/Movie/Detail/${data.id}`}  > 
           <div className={styles.imgPlay}>
             <img className={styles.poster} 
             key={data.id}
             src={`${Base_Url}${data.backdrop_path}`} 
            /> <i><AiOutlinePlayCircle size={60}/></i>
            </div>
           <h4>{truncate(data.original_title ? data.original_title: data.name,25)}</h4>
           </Link>
             </div>))} 
             </Slider> 
             <button className={styles.FcNext} onClick={()=>sliderhow.current.slickNext()} 
        ><IoIosArrowForward/></button>
          <button className={styles.FcPrevious} onClick={()=>sliderhow.current.slickPrev()} 
          ><IoIosArrowBack/></button>
             {/* </div>      */}
          <div className={styles.degradado}></div>
          {/* <div className={styles.degradado}></div> */}
      </div> 
      
    </div>
  )
}

export default Seccion
