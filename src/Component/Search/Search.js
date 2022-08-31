import React from 'react';
import styles from "./Slyles.module.css";
import{ useSelector} from "react-redux";
import Spiner from "../Spinner/Spiner"
import Header from '../Header/Header';
import Grid from '../Grid/Grid';


 const Base_Url= "https://image.tmdb.org/t/p/original"?
 "https://image.tmdb.org/t/p/original":"https://image.tmdb.org/t/p/w500";
 const Search = () => {
  
 const movies = useSelector((state) => state.contenSlice.Search)

 
 return (
    <div className={styles.conterSearch}>
      <Header/>
      { movies.length === 0 ?(<Spiner/>):
        (<Grid moviesCard={movies} />
        )} 
        <h3>No hay mas datos</h3>
    </div>
  )
}

export default Search
