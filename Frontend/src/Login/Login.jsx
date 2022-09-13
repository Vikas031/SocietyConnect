import React from 'react';
import styles from './Login.module.css';
import { useNavigate } from 'react-router';
const Login = () => {
  const navigate=useNavigate();

  function submit(){
    navigate('/home');
  }

  return (
    <div>
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