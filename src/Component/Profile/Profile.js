import React from 'react'
import Header from '../Header/Header'
import styles from "./Slyles.module.css";
import Plans from '../Plans/Plans';
import firebaseApp from '../Credencial';
import { Button } from '../StyledComponents';
import {getAuth, signOut} from "firebase/auth";

const auth = getAuth(firebaseApp);

const Profile = () => {
  return (
    <div className={styles.conten} >
       <div>
      <Header/>
    </div>
    <div className={styles.Profile}>
      <h2>Edif Profile</h2>
       <div className={styles.info}>
        <div className={styles.detalles}>
          <h3 className={styles.Email}>Email ususario</h3>
          <h4>Plans</h4>
          <div className={styles.Plans}>
          <Plans cost={5.99}>Plan Basic</Plans>
          <Plans cost={9.99} >Plan Standard</Plans>
          <Plans  color="gray" cost={13.99} >Plan Premium</Plans>
          <Button className={styles.Button}  width="100%" onClick= {()=> signOut(auth)} >Sign Out</Button >  
         </div>
         </div>
       </div>
       </div>
    </div>
  )
}

export default Profile
