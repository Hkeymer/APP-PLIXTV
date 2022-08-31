import React,{useState } from 'react'
import { NavLink} from "react-router-dom"
import styles from "./Slyles.module.css"
import {AiOutlineMenu, AiFillHome} from 'react-icons/ai';
import {FaUserAlt, FaSearch} from 'react-icons/fa';
import {MdFavorite} from 'react-icons/md';
import {Menustyled} from "../StyledComponents"

const Menu = () => {

    const [menu, setMenu]= useState(false)


  return (
    <div>
         <div className={styles.conteier}>
         <i className={styles.menuIcon} onClick={()=>setMenu(!menu)} ><AiOutlineMenu/></i>
        <Menustyled open={menu} className={styles.menu}>
        <NavLink exact to={"/"}  className={styles.NavLink} >
          {/* <i><AiFillHome/></i>  */}
        inicio </NavLink> 
        <NavLink exact to={'/Peliculas/Trending'} className={styles.NavLink} >Nuevo</NavLink>
        <NavLink exact to={'/Peliculas/Documentales'} className={styles.NavLink} >Documentales</NavLink>
        {/* <NavLink className={styles.NavLink} exact to={'/Fovorites'} > <i><MdFavorite/> </i> Mis lista</NavLink> */}
        <NavLink className={styles.NavLink} to='/Profile'>
          {/* <i><FaUserAlt/></i> */}
          Ver Perfil</NavLink>
        </Menustyled>
        </div>
    </div>
  )
}

export default Menu
