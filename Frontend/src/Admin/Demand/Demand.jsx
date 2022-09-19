import Button from 'react-bootstrap/Button';
import React,{useState} from 'react';
import Searchbox  from '../../Components/Shared/Searchbox/Searchbox';
import styles from './Demand.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router';

const arr=[
  {
    name:"Hritik Bharadwaj",
    membership_no :"ADSKLFADS",
    Loan_id :"dfadsf",
    amount:"12312"

  },
  {
    name:"Hritik Bharadwaj",
    membership_no :"ADSKLFADS",
    Loan_id :"dfadsf",
    amount:"12312"

  },
  {
    name:"Hritik Bharadwaj",
    membership_no :"ADSKLFADS",
    Loan_id :"dfadsf",
    amount:"12312"

  },
  {
    name:"Hritik Bharadwaj",
    membership_no :"ADSKLFADS",
    Loan_id :"dfadsf",
    amount:"12312"

  },
  
]


const Demand = () => {
  const [type,settype]=useState(1);
  const toggle={
    background:'white',
    cursor:'pointer'
  }

  return (
    <div className={styles.demand_container}>

    <Container className={styles.top_section}>
        <Row >
          <Col xs={8}>
            <div>
            <h2 className={styles.division_head}>Monthly Demand</h2>
            </div>
          </Col>
          <Col xs={4}>
            <div>
            <Searchbox search="Search members here"></Searchbox>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={8}></Col>
          <Col xs={4}></Col>
        </Row>
    </Container>

    <Container className={styles.toggle_section}>
      <Row>
        <Col xs={8}>
          <div style={{display:"flex",marginTop:'10px'}}>
          <div className={styles.toggle_btn} style={type==2?toggle:null} onClick={()=>{settype(1)}}  >Pending</div>
          <div className={styles.toggle_btn} style={type==1?toggle:null} onClick={()=>{settype(2)}} >Received</div>
          </div>
          </Col>
        <Col xs={4}>
          <div>
          Export to pdf
          </div></Col>
      </Row>
    </Container>

    {type==1&&<Container>
        pending
    </Container>}
    {type==2&&<Container>
        received
    </Container>}
   
    </div>
  )
}

export default Demand