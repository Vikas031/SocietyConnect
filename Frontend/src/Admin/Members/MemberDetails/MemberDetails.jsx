import React,{useState} from 'react';
import styles from './MemberDetails.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const MemberDetails = () => {
    const [val,setval]=useState(1);
    const active_style={
        color:"#0077ff",
        fondWeight:'bolder',
        textDecoration:'none',
        background:"cadetblue",
      }
  return (
    <div className={styles.member_details}>
        <Container >
            <Row>
                <Col xs={12} md={3} className={styles.toggle_detail}>
                    <Container>
                        <Row >
                            <Col xs={3} md={12} onClick={()=>setval(1)} style={val==1?active_style:null} className={styles.detail_header}>Personal Info</Col>
                            <Col xs={3} md={12} onClick={()=>setval(2)} style={val==2?active_style:null} className={styles.detail_header}>Bank Details</Col>
                            <Col xs={3} md={12} onClick={()=>setval(3)} style={val==3?active_style:null} className={styles.detail_header}>Nominee Details</Col>
                            <Col xs={3} md={12} onClick={()=>setval(4)} style={val==4?active_style:null} className={styles.detail_header}>Introducer's Detail</Col>
                        </Row>
                    </Container>
                </Col>

                {val==1&&<Col className={styles.details} xs={12} md={9}>
                    <h3 style={{textAlign:'center',fontFamily:'sans-serif',marginTop:"10px"}}>Personal Information</h3>
                    <Container>
                        <Row>
                            <Col xs={9}>
                                <Container className={styles.details_division}>
                                    <Row>
                                        <Col xs={6}>
                                            <div className={styles.details_heading}> Name</div>
                                             <div className={styles.details_subhead}>abcdef</div>
                                             </Col>
                                        <Col xs={6}>
                                            <div className={styles.details_heading}> Father's Name</div>
                                             <div className={styles.details_subhead}>abcdef</div>
                                             </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={6}>
                                            <div className={styles.details_heading}> Age</div>
                                             <div className={styles.details_subhead}>abcdef</div>
                                             </Col>
                                        <Col xs={6}>
                                            <div className={styles.details_heading}> Nationality</div>
                                             <div className={styles.details_subhead}>abcdef</div>
                                             </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={6}>
                                            <div className={styles.details_heading}> Date Of Birth</div>
                                             <div className={styles.details_subhead}>abcdef</div>
                                             </Col>
                                        <Col xs={6}>
                                            <div className={styles.details_heading}> Phone No</div>
                                             <div className={styles.details_subhead}>abcdef</div>
                                             </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12}>
                                            <div className={styles.details_heading}> Home Adress</div>
                                             <div className={styles.details_subhead}>abcdef</div>
                                             </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={6}>
                                            <div className={styles.details_heading}> Occupation</div>
                                             <div className={styles.details_subhead}>abcdef</div>
                                             </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12}>
                                            <div className={styles.details_heading}> Occupation Adresss and Phone</div>
                                             <div className={styles.details_subhead}>abcdef</div>
                                             </Col>
                                    </Row>
                                </Container>

                            </Col>
                            <Col xs={3}>
                    <br />
                    <div className={styles.avatar}>
                    <div className={styles.avatarWrapper}>
                        
                    <img
                        className={styles.avatarImage}
                        src={`/images/default_profile_pic.png`}
                        alt="avatar"
                    />
                </div>
                <div>
                    <input
                        name="profile_pic"
                        id="avatarInput"
                        type="file"
                        className={styles.avatarInput}
                    />
                    <label className={styles.avatarLabel} >
                        Profile picture
                    </label>
                </div>
                </div>

                            </Col>
                        </Row>
                    </Container>
                    
                    </Col>}

                {val==2&&<Col className={styles.details} xs={12} md={9}>Bank Details</Col>}
                {val==3&&<Col className={styles.details} xs={12} md={9}>Nominee Details</Col>}
                {val==4&&<Col className={styles.details} xs={12} md={9}>Introducer</Col>}
            </Row>
        </Container>
    </div>
  )
}

export default MemberDetails