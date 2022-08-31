import { createSlice } from '@reduxjs/toolkit';
import {requests} from "../../Component/GetMoviesApi"
import axios from "axios"


export const contenSlice = createSlice({
  name: 'called',
  initialState: {
    Search: [],
    addFovorite:[],
    Const: 0
  },
  reducers: {
    setSearch:(state, action) => {
         state.Search = action.payload;
    },
    setFovorites:(state, action) => {
      state.addFovorite = state.addFovorite.concat(action.payload);
 },
 setRomoveFavo:(state, action) => {
   state.addFovorite = state.addFovorite.filter(e => e.id !== action.payload);
},
setCoste:(state, action) => {
  state.Const = action.payload
},
  
 } 
 });

export const {setSearch,setFovorites,setRomoveFavo,setCoste} = contenSlice.actions;


export const getSerach = (searchTex) => async (dispatch) => {
     axios
     .get("https://api.themoviedb.org/3/"+ requests.fetchSearch + searchTex)
     .then((rest)=>{
      dispatch(rest.data.results.length > 0 ? setSearch(rest.data.results) : null
         
      )
         })
      .catch((error)=>console.error(error))    
};

export const getMovieFovorite = (movie) => (dispatch) => {
     dispatch(setFovorites(movie))
 };
 export const getRemoveFavorites = (id) => (dispatch) => {
   dispatch(setRomoveFavo(id))
};

export const getCoste = (cost) => (dispatch) => {
  dispatch(setCoste(cost))
};

 
export default contenSlice.reducer;

