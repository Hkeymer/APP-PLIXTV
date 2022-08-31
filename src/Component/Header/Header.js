import React,{useState} from 'react'
import styles from "./Slyles.module.css"
import {NavLink} from "react-router-dom"
import {FaUserAlt} from 'react-icons/fa';
import Menu from '../Menu/Menu';
import {FiSearch} from 'react-icons/fi';
import {useNavigate } from 'react-router-dom';
import { useDispatch} from "react-redux";
import {getSerach} from "../../features/counter/counterSlice"



 
const Header = () => {

  const [searchTex, setSearchTex] = useState("");
  const history = useNavigate();
  const dispatch = useDispatch();

    const handlerSubmit = (e) => {
      e.preventDefault()
      if(searchTex){
        dispatch(getSerach(searchTex))
      history('/Peliculas/Search')
      }
     else{ 
      return alert("No hay resultados")
    }
  } 

  let activeStyle = {
    color:"#fff"};


  return (
    <div>
    <div className={styles.Header}>
       <div className={styles.conteinerIzquierdo}>
     <NavLink to="/">
     <h1 className={styles.logo}>PLIXTV
      </h1>
     </NavLink>
     <div className={styles.nav}>
           <NavLink exact to={"/"} 
          style={({ isActive }) => isActive ? activeStyle : undefined}
           >Inicio</NavLink> 
            <NavLink exact to={'/Peliculas/Trending'} style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Nuevo</NavLink>
             <NavLink exact to={'/Peliculas/Documentales'} 
          style={({ isActive }) => isActive ? activeStyle : undefined}
           >Documentales</NavLink>
            </div>
        </div>
        <div className={styles.Menu} >
        <form className={styles.formConten}
        onSubmit={handlerSubmit}
     >
      <div className={styles.divSearch} >
        <input 
         type="text"
         placeholder='Search Movies'
         onChange={(e)=>setSearchTex(e.target.value) }
         >
        </input>
        <button 
          type="submit">
            <FiSearch/>
        </button>
        </div>
        </form>

           <Menu/></div>
         <nav className={styles.nav2}>
         <form className={styles.formConten}
        onSubmit={handlerSubmit}
     >
      <div className={styles.divSearch} >
        <input 
         type="text"
         placeholder='Search Movies'
         onChange={(e)=>setSearchTex(e.target.value) }
         >
        </input>
        <button 
          type="submit">
            <FiSearch/>
        </button>
        </div>
        </form>

        {/* <NavLink to='/Profile'>
         <i className={styles.favorites}><MdOutlineFavorite/></i>
         </NavLink> */}
          <NavLink to='/Profile'>
         <i className={styles.user}><FaUserAlt/></i>
         </NavLink>
     </nav>
    </div>
    </div>
  )
}

export default Header
