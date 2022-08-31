import React from 'react'
import styles from "./Slyles.module.css"
import {FaFacebookF,FaGithub}from "react-icons/fa"
import {RiWhatsappFill}from "react-icons/ri"
import {AiFillLinkedin}from "react-icons/ai"
import {BsFillPlayFill} from 'react-icons/bs';
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <div className={styles.Footer}>

      <div className={styles.grupo1}>
      <div className={styles.box}>
        <figure className={styles.logo}>
             <h1>PLIXTV</h1>
        </figure>
      </div>
      <div className={styles.box}>
        <h2>TV Y PELÍCULAS</h2>
        <p>Todo  desde un mismo lugar</p>
        <p>Disfruta de tus series y películas favoritas </p>
      </div>
      <div className={styles.box}>
      <h2>MIS REDES</h2>
      <div className={styles.redSocial}>
       <Link className={styles.Link}  to={"#"}><FaFacebookF/></Link>
       <Link className={styles.Link} to={"#"}><FaGithub/></Link>
       {/* <Link className={styles.Link} to={"#"}><RiWhatsappFill/></Link> */}
       <Link className={styles.Link} to={"#"}><AiFillLinkedin/></Link>
       </div>
      </div>
      </div>
      <div className={styles.grupo2}>
      <small>&copy; 2022 <b>PLIXTV</b> - Todos los derechos reservados.</small>
    </div>
    </div>
  )
}

export default Footer
