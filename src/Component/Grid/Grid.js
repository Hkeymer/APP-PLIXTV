import React from 'react'
import styles from "./Slyles.module.css";
import { Link } from 'react-router-dom'; 
import Spiner from "../Spinner/Spiner"
import {AiOutlinePlayCircle} from 'react-icons/ai';
import {AiOutlineArrowLeft} from 'react-icons/ai';
import Footer from '../Footer/Footer';

const Base_Url= "https://image.tmdb.org/t/p/original"?
"https://image.tmdb.org/t/p/original":"https://image.tmdb.org/t/p/w500";

const Grid = ({moviesCard,title}) => {

  if(moviesCard.length===0){
    return (<Spiner/>)
}
if (!moviesCard) {
 return null
  }
  return (
    <div>
    <div className={styles.contenGrid}>
      <div className={styles.conten} >
        <h2 className={styles.title}>{title}</h2>
      <div className={styles.Grid}>
        {moviesCard.map(data => ( !data.backdrop_path ? false:
        <div >   
      <Link to={`/Movie/Detail/${data.id}`}>
      <div className={styles.imgPlay}>
             <img className={styles.poster} 
             key={data.id}
             src={`${Base_Url}${data.backdrop_path}`} 
            /> <i><AiOutlinePlayCircle size={60}/></i>
            </div>
             <h4>{data.original_title ? data.original_title: data.name}</h4></Link>
        </div>))}
      </div>
      
    </div> 
    </div>
    </div>
  )
}

export default Grid
