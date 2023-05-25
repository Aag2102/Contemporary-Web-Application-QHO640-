import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import Button from "../../node_modules/react-bootstrap/Button";
import {Link} from "react-router-dom";
import Table from "../../node_modules/react-bootstrap/Table";


const imageStyles = {
    maxHeight: '500px',
    maxWidth: '500px',
    minHeight: '100px',
    minWidth: '100px',
  };

class MembershipS1 extends Component{




    render(){
        return(    
            <Container fluid className="d-flex minh-50vh align-items-center py-5 border-top border-secondary pt-5">
            <Row className="mx-0 w-100 mt-5">
                <Col xs={{span:12,order:1}} md={{span:7,order:2}} className="minh-25vh"></Col>
                <Col xs={{span:12,order:2}} md={{span:5,order:1}} className="minh-50vh d-flex align-items-center">
                    <div className="w-100 text-center text-md-start">
                        <h1 className="text-white">
                        Overview
                        </h1>
                        {/* <h2 className="dispaly-6 fw-bold text-white-50 text-shadow">
                            Unde omnis iste
                        </h2> */}
                        <p className="text-white">
                        We are here to offer wide range of training and workshop classes to those students who face challenges while learning through online platforms. Many students do not carry enough digital skills and knowledge to access online learning programs, online assignment, virtual classes and virtual management of learning. This impact their academic performance and reduce their ability to manage work using digital platforms. We are focused to ensure that every student understand the value and importance of digital knowledge, it is very clear that, technical knowledge is significantly important for each learner as this help them to visit different educational website and access online educational materials.
                        </p>
                        <img src="/img/about-us-1.png" className="img-fluid classes-s5" style={imageStyles} fluid alt="logo"/> <br />

                    </div>
                </Col>
            </Row>
                    {/* <Link to="/login">Take Free Memebership</Link> */}

        </Container>

        );
    }
}

export default MembershipS1;