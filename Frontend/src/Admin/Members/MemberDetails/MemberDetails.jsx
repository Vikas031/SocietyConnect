import React,{useState} from 'react';
import styles from './MemberDetails.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const MemberDetails = () => {
    const [val,setval]=useState(1);
    const active_style={
        color:"#0077ff",
        fondWeight:'bold',
        textDecoration:'none',
        background:"cadetblue",
      }
  return (
    <div>
        <Container style={{border:'1px solid black',height:'100vh',marginTop:'10px'}}>
            <Row>
                <Col md={3} className={styles.toggle_detail}>
                    <Container>
                        <Row >
                            <Col xs={3} md={12} onClick={()=>setval(1)} style={val==1?active_style:null} className={styles.detail_header}>Personal Info</Col>
                            <Col xs={3} md={12} onClick={()=>setval(2)} style={val==2?active_style:null} className={styles.detail_header}>Bank Details</Col>
                            <Col xs={3} md={12} onClick={()=>setval(3)} style={val==3?active_style:null} className={styles.detail_header}>Nominee Details</Col>
                            <Col xs={3} md={12} onClick={()=>setval(4)} style={val==4?active_style:null} className={styles.detail_header}>Introducer's Detail</Col>
                        </Row>
                    </Container>
                </Col>
                {val==1&&<Col className={styles.details} md={9}>Personal Info</Col>}
                {val==2&&<Col className={styles.details} md={9}>Bank Details</Col>}
                {val==3&&<Col className={styles.details} md={9}>Nominee Details</Col>}
                {val==4&&<Col className={styles.details} md={9}>Introducer</Col>}
            </Row>
        </Container>
    </div>
  )
}

export default MemberDetails