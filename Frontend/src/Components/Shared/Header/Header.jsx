import React from 'react'
import styles from './Header.module.css';
import { FiLogOut } from 'react-icons/fi';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { setAuth } from '../../../store/authSlice';
import { useSelector} from 'react-redux';


const Header = () => {
  const navigate=useNavigate();
  const isAuth=useSelector((state)=>state.auth.isAuth);
  const dispatch=useDispatch();
  function logout(){
    dispatch(setAuth(false));
    navigate('/');
  }
  return (
    <>
    <Container>
      <Row className={styles.header}>
        <Col xs={12} md={8}className={styles.container}><div>Society</div> <div>Connect</div></Col>
        <Col xs={12} md={4}> 
        {isAuth.payload&&<Container style={{height:'100%'}}>
          <Row >
            <Col xs={9} style={{display:'flex',alignItems:'center'}}><Button  onClick={()=>navigate('/add-member')} variant="danger">Add a new member...</Button></Col>
            
            <Col xs={3}>
            <div>Logout</div>
              <button className={styles.logoutbtn} onClick={logout}><FiLogOut size="sm"></FiLogOut></button></Col>
          </Row>
        
        </Container>}
        </Col>

      </Row>
    </Container>
    </>
   
  )
}

export default Header