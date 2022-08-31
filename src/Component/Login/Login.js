import React,{useEffect,useState} from 'react'
import {useNavigate } from 'react-router-dom';
import styles from "./Slyles.module.css";
import {MdOutlineVisibilityOff,MdOutlineVisibility} from "react-icons/md"
import firebaseApp from '../Credencial';
import {requests} from "../GetMoviesApi";
import {Button} from "../StyledComponents"
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, 
  signInWithRedirect, GoogleAuthProvider} from "firebase/auth";


const Base_Url= "https://image.tmdb.org/t/p/original"?
"https://image.tmdb.org/t/p/original":"https://image.tmdb.org/t/p/w500";

const auth = getAuth(firebaseApp);
const Google = new GoogleAuthProvider();

const Login = () => {
  
  const [movie,setMovie] = useState([])
  const [mostrar,setMostrar] = useState(true)
  const [register, setRegister] = useState(false)
  const history = useNavigate();
 

  useEffect(()=>{
     fetch("https://api.themoviedb.org/3/"+ requests.fetchTrending)
     .then(rest => rest.json())
     .then(data => {
       const random = Math.floor(Math.random()*data.results.length-1)
       setMovie(data.results[random])
     })
   },[])

  const handlerSubmit =  async (e)  => {
    e.preventDefault();
    history('/')
    const correo =  e.target.email.value
    const contraseña =  e.target.password.value
    if(!register){
      const usuario = await createUserWithEmailAndPassword(auth,correo,contraseña)
    }
    signInWithEmailAndPassword(auth,correo,contraseña)
}
      
    if(!movie){
      return null
    }


  return (
    <div  className={styles.Login} 
    style={{ backgroundImage:`linear-gradient( rgba(0, 0, 0,.50) 0%,rgba(0, 0, 0,.50 )100%),
      url(${Base_Url}${movie.backdrop_path?movie.backdrop_path:false})`}}   
    >
       <div className={styles.SignUp} >
          <h1>{ register ? "Iniciar sesion" : "Registrarse"}</h1>
          <form onSubmit={handlerSubmit} >
            <input type={"email"} placeholder='Email' id='email' ></input>
            <div className={styles.divPassword} >
              <input type={mostrar?'Password':null} placeholder='Password' id='password' ></input>
              <button onClick={()=> setMostrar(!mostrar)}> { mostrar? <MdOutlineVisibility/>:<MdOutlineVisibilityOff/> }</button>
            </div>
            <Button className={styles.Button} width="100%" > { register? "Iniciar sesion":"Registrarse" }</Button>
            {/* <button className={styles.Button} onClick={()=> signInWithRedirect(auth,Google)} >Acceder con Google</button> */}
            <Button className={styles.Button} width="100%" color='gray' onClick={()=> setRegister(!register)}>{ register?
            "¿No tienes cuenta? Registrarte":"¿Ya tienes cuenta? Iniciar sesion" }</Button>
          </form>
        </div> 
    </div>
  )
}

export default Login
