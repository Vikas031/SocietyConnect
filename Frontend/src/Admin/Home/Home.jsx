import React from 'react'
import styles from './Home.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
  return (
    <Container className={styles.homecontainer}>
    <Row >
    <Container className={styles.boxcontainer}>
      <Row>
        <Col xs={6}  md={4}className={styles.col}>
        <div>Total Members</div> 
        </Col>
        <Col xs={6} md={4}className={styles.col}><div>Loans Count</div> </Col>
        <Col xs={6} md={4}className={styles.col}>
          <div>FD Count</div> </Col>
      
        <Col xs={6} md={6}className={styles.col2}><div>Total Transactions (Monthly)</div> </Col>
        <Col xs={12} md={6}className={styles.col2}><div className={styles.lastelement}>Pending Transactions (Monthly)</div></Col>
      </Row>
    </Container>

    </Row>
    </Container>
  )
}

export default Home