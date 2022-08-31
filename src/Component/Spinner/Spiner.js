import styles from "./Slyles.module.css";
import React from 'react'
import Header from "../Header/Header"
import { VscLoading } from "react-icons/vsc";

const Spiner = () => {
  return (
    <div>
    <div className={styles.Spiner} >
    <div style={{ marginTop:"12.5rem"}}>
      <h1><i><VscLoading className={styles.spinn}/></i></h1>
      </div>
    </div> 
    </div>
  )
}

export default Spiner
