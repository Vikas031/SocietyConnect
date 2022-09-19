import React, { useState } from 'react'
import styles from './Navigation.module.css';
import { useNavigate } from 'react-router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
    <>
    
    <Container className={styles.navigation}>
    <Row className={styles.navcontainer}>
        <Col xs={4}  sm={2} style={focus==='home'?signInLinkStyle:null} onClick={()=>{submit('home')}}>Home</Col>
        <Col xs={4}  sm={2} style={focus==='member'?signInLinkStyle:null} onClick={()=>{submit('member')}}>Members</Col>
        <Col xs={4}  sm={2} style={focus==='ledger'?signInLinkStyle:null} onClick={()=>{submit('ledger')}}>Ledger</Col>
        <Col xs={4}  sm={2} style={focus==='loan'?signInLinkStyle:null} onClick={()=>{submit('loan')}}>Loan</Col>
        <Col xs={4}  sm={2} style={focus==='fixed-deposit'?signInLinkStyle:null} onClick={()=>{submit('fixed-deposit')}}>Fixed Deposit</Col>
        <Col xs={4} sm={2} style={focus==='demand'?signInLinkStyle:null} onClick={()=>{submit('demand')}}>Demand</Col>
    </Row>
    </Container>
    </>
  )
}

export default Navigation