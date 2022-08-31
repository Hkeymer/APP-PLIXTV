import React from "react";
import ReactDOM from "react-dom";
import styles from "./Slyles.module.css";
import{useSelector} from "react-redux";
const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

export default function YourComponent() {
   
  const coste = useSelector((state) => state.contenSlice.Const)
  
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: coste,
          },
        },
      ],
    });
  };
  const onApprove = (data, actions) => {
    return actions.order.capture();
  };
  return (<div className={styles.conten} > 
    <div>
    <PayPalButton 
    createOrder={(data, actions) => createOrder(data, actions)}
    onApprove={(data, actions) => onApprove(data, actions)}
  /></div> 
  </div>
  );
}
