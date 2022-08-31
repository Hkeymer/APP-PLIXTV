import React from 'react'
import Header from '../Header/Header'
import styles from "./Slyles.module.css"
import{useDispatch, useSelector} from "react-redux";
import { Link } from 'react-router-dom'; 
import {AiTwotoneDelete,AiOutlinePlayCircle} from 'react-icons/ai';
import {getRemoveFavorites} from "../../features/counter/counterSlice"

const Base_Url= "https://image.tmdb.org/t/p/original"?
"https://image.tmdb.org/t/p/original":"https://image.tmdb.org/t/p/w500";

const Favotites = () => {
  const moviesFavorites = useSelector((state) => state.contenSlice.addFovorite)
  const truncate = (string , n) => string?.length > n ?`${string.substring(0,n-1)}...`:string
  
  const  dispatch = useDispatch()

  const remove = (id) => {
    dispatch(getRemoveFavorites(id))
  }
  
  return (
    <div>
      <div>
   <Header/>
    </div>
    <div className={styles.Favotites}>
    <div className={styles.Grid}>
        {moviesFavorites.length === 0?(<h3>Tu lista esta vacia </h3>) : moviesFavorites.map(data => (
        <div className={styles.card}>   
      <Link className={styles.contenLink} to={`/Movie/Detail/${data.id}`}>
       <div className={styles.imgPlay} ><img className={styles.poster}
           key={data.id}
           src={`${Base_Url}${data.backdrop_path}`}
             alt={data?.name}/><i  className={styles.Play}><AiOutlinePlayCircle size={60}/></i>
              </div>
             <div>
               <h4 className={styles.title} >{data.original_title}</h4>
             <h4 className={styles.Descripcion}>{truncate(data.overview,150)}</h4>
             </div>
             </Link>
             <button onClick={()=>{remove(data.id)}}  ><h3>Eliminar <i><AiTwotoneDelete size={22}/></i></h3></button>
        </div>))}
      </div>
    </div>
    </div>
  )
}

export default Favotites
