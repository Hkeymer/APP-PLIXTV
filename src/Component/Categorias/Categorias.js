import React from 'react';
import styles from "./Slyles.module.css";
import {NavLink} from"react-router-dom";


const Categorias = () => {
    let activeStyle = {
        color: "cadetblue",  
      };    
  return (
    <div className={styles.Categorias}>
         <NavLink className={styles.Recientes}  exact to={'/Peliculas/Trending'} style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } >Más Recientes</NavLink>
          <NavLink className={styles.NavLink} exact to={'/Peliculas/Accion'} style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Accion</NavLink>
          <NavLink className={styles.NavLink} exact to={'/Peliculas/Comedia'}style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Comedia</NavLink>  
          <NavLink className={styles.NavLink} exact to={'/Peliculas/Horror'} style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Horror</NavLink> 
            <NavLink className={styles.NavLink}  exact to={'/Peliculas/Romance'} style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Romance</NavLink>
            <NavLink className={styles.NavLink} exact to={'/Peliculas/Documentales'} style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Documentales</NavLink>   
    </div>
  )
}

export default Categorias
