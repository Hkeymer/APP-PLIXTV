import React from 'react'
import styles from "./Slyles.module.css";
import { Button } from '../StyledComponents';
import {useNavigate } from 'react-router-dom';
import {getCoste} from "../../features/counter/counterSlice"
import { useDispatch} from "react-redux"

const Plans = ({cost,children,color,width}) => {
   const dispatch = useDispatch()
   const history = useNavigate();
   console.log(history)
   const handlersPlans =() =>{
      dispatch(getCoste(cost))
      history('/Checkout')
   }
  return (
    <div className={styles.Plans}>
      <h3>{children}</h3>
      <Button color={color} onClick={()=>handlersPlans()} >subscribe</Button>
    </div>
  )
}

export default Plans
