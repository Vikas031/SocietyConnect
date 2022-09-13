import React, { useState } from 'react'
import styles from './Navigation.module.css';
import { useNavigate } from 'react-router';

const Navigation = () => {
  const [focus,setfocus]=useState('home');
  const signInLinkStyle={
    color:"#0077ff",
    fondWeight:'bold',
    textDecoration:'none',
    background:'white',
  }
  const navigate=useNavigate();
  function submit(value){
    setfocus(value);
    navigate(`/${value}`);
  }
  
  
  return (
    <div className={styles.navcontainer}>
        <div style={focus=='home'?signInLinkStyle:null} onClick={()=>{submit('home')}}>Home</div>
        <div style={focus=='member'?signInLinkStyle:null} onClick={()=>{submit('member')}}>Members</div>
        <div style={focus=='ledger'?signInLinkStyle:null} onClick={()=>{submit('ledger')}}>Ledger</div>
        <div style={focus=='loan'?signInLinkStyle:null} onClick={()=>{submit('loan')}}>Loan</div>
        <div style={focus=='fixed-deposit'?signInLinkStyle:null} onClick={()=>{submit('fixed-deposit')}}>Fixed Deposit</div>
        <div style={focus=='demand'?signInLinkStyle:null} onClick={()=>{submit('demand')}}>Demand</div>
    </div>
  )
}

export default Navigation