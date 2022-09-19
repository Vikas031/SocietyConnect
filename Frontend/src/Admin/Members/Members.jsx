import Button from 'react-bootstrap/Button';
import React from 'react';
import Searchbox  from '../../Components/Shared/Searchbox/Searchbox';
import styles from './Members.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router';

const arr=[
  {
    name:"Hritik Bharadwaj",
    membership_no :"ADSKLFADS",
    mobile:"123123233",

  },
  {
    name:"Hritik Bharadwaj",
    membership_no :"ADSKLFADS",
    mobile:"123123233",

  },
  {
    name:"Hritik Bharadwaj",
    membership_no :"ADSKLFADS",
    mobile:"123123233",

  },
]



const Members = () => {
  const navigate=useNavigate();
 return (
    <div>
    <Container className={styles.boxcontainer}>
      <Row>
        <Col xs={12} sm={12}>
        <Searchbox search="Enter the name of the member"/>
        </Col>

      {/* <Col xs={12} sm={6} style={{display:'flex',justifyContent:'flex-end',alignItems:'center'}}>
      <Button variant="danger">Add a new member...</Button>
      </Col>  */}
      </Row>
    </Container>

    <div className={styles.memberstable}>
    <br />
      <Container>
      <Row>
      <Col xs={12}>
    <Table bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Membership No.</th>
          <th>Mobile No.</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {arr.map((item)=>{
          return(
          <tr>
          <td>{item.name}</td>
          <td>{item.membership_no}</td>
          <td>{item.mobile}</td>
          <td style={{display:'flex',justifyContent:'center'}}>
            <Button className={styles.memberbtn} variant="success" size="sm" onClick={()=>{
              navigate(`/edit/${item.membership_no}`)
            }}>Edit</Button> 
            <div>||</div>
            <Button className={styles.memberbtn} variant="info" size="sm" onClick={()=>{
              navigate(`/member-details/${item.membership_no}`)
            }}>Details</Button></td>
        </tr>)
        })
        }
      </tbody>
    </Table>
    </Col>
    </Row>
    </Container>
    </div>
    
    </div>
  )
}

export default Members