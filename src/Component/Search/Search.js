import React,{useState} from 'react';
import{ useSelector} from "react-redux";
import Header from '../Header/Header';
import Grid from '../Grid/Grid';


 const Base_Url= "https://image.tmdb.org/t/p/original"?
 "https://image.tmdb.org/t/p/original":"https://image.tmdb.org/t/p/w500";
 const Search = () => {
  
 const movies = useSelector((state) => state.contenSlice.Search)

  

 return (
    <div>
      <Header/>
      { movies.length === 0 ?null:
        (<Grid moviesCard={movies} />
        )} 
        <h3 style={{margin:"30px 0"}}>No hay mas datos</h3>
    </div>
  )
}

export default Search
