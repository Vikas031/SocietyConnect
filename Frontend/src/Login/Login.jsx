import React from 'react';
import styles from './Login.module.css';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { setAuth } from '../store/authSlice';
const Login = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  function submit(){
    dispatch(setAuth(true));
    navigate('/home');
  }

  return (
    <div style={{border:'1px solid black',width:'100%'}}>
    <div className={styles.main}>
    
    <p className={styles.sign} >Sign in</p>
    
    <form className={styles.form1}>
      <input className={styles.un} type="text" align="center" placeholder="Username" />
      <input className={styles.pass} type="password" align="center" placeholder="Password" />
      
      <a className={styles.submit} align="center" onClick={submit}>Sign in</a>
      
      <p className={styles.forgot} align="center">
        <a href="#" />Forgot Password? 
      </p>

    </ form >
    
    </div>
    </div>
  )
};

export default Login;