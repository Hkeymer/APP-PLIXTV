import React from 'react';
import{ useSelector} from "react-redux";
import Header from '../Header/Header';
import Grid from '../Grid/Grid';
import Spiner from "../Spinner/Spiner";


 const Base_Url= "https://image.tmdb.org/t/p/original"?
 "https://image.tmdb.org/t/p/original":"https://image.tmdb.org/t/p/w500";
 const Search = () => {
  
 const movies = useSelector((state) => state.contenSlice.Search)

  

 return (
    <div>
      <Header/>
      { movies.length === 0 ?<Spiner/>:
        (<Grid moviesCard={movies} />
        )} 
        <h3>No hay mas datos</h3>
    </div>
  )
}

export default Search
