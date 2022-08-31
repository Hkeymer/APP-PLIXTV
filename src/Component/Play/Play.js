import React from 'react';
import {BsFillEmojiDizzyFill}from "react-icons/bs"
import styles from "./Slyles.module.css";
import Header from "../Header/Header"

const Play = () => {
  return (
    <div>
      <Header/>
      <div className={styles.Play}>
      <h1>Contenido aún no disponible</h1>
      <i><BsFillEmojiDizzyFill size={70} /></i>
    </div>
    </div> 
  )
}

export default Play;
