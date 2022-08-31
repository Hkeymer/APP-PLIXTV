import React, { useState } from 'react';
import './App.css';
import Home from './Component/Home/Home';
import Profile from './Component/Profile/Profile';
import Login from './Component/Login/Login';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from './Component/Detail/Detail';
import Favotites from './Component/Favorites/Favotites';
import Search  from "./Component/Search/Search";
import Accion  from "./Component/Categorias/Accion/Accion";
import  Comedia from "./Component/Categorias/Comedia/Comedia";
import  Docuentales from "./Component/Categorias/Docuentales/Docuentales";
import  Horror from "./Component/Categorias/Horror/Horror";
import Romance from "./Component/Categorias/Romance/Romance";
import Play from './Component/Play/Play';
import YourComponent from "./Component/YourComponent/YourComponent";
import Trending from './Component/Categorias/Trending/Trending';
import firebaseApp from './Component/Credencial';
import {getAuth,onAuthStateChanged} from "firebase/auth";

const auth = getAuth(firebaseApp);

   function App () {

     const [ user , setUser ] = useState(null)

     onAuthStateChanged(auth,(userFirebase) => {
           if (userFirebase){
             setUser(userFirebase)
           } else {
             setUser(null)
           }
     })
     
  return (
    <div className="App">
      <BrowserRouter>
      { !user? <Login/>:(  
          <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/Play/Movie' element={<Play/>}/>
            <Route path='/Profile' element={<Profile/>}/>
            <Route path='/Checkout' element={<YourComponent/>}/>
            <Route path='/Movie/Detail/:id' element={<Detail/>}/>
            <Route path='/Fovorites' element={<Favotites/>}/>
            <Route path='/Peliculas/Trending' element={<Trending/>}/>
            <Route path='/Peliculas/Accion' element={<Accion/>}/>
            <Route path='/Peliculas/Comedia' element={<Comedia/>}/>
            <Route path='/Peliculas/Documentales' element={<Docuentales/>}/>
            <Route path='/Peliculas/Horror' element={<Horror/>}/>
            <Route path='/Peliculas/Romance' element={<Romance/>}/>
            <Route path='/Peliculas/Search' element={<Search/>}/>
          </Routes>  )}
      </BrowserRouter>
    </div>
  );
}

export default App;
