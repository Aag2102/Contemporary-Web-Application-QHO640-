import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";

const imageStyles = {
    maxHeight: '500px',
    maxWidth: '500px',
    minHeight: '100px',
    minWidth: '100px',
  };

class ClassesS3 extends Component{
    render(){
        return(    
            <Container fluid className="d-flex minh-25vh align-items-center py-5 pt-5">
                <Row className="mx-0 w-100 mt-5">
                    <Col xs={{span:12,order:1}} md={{span:7,order:2}} className="minh-25vh"></Col>
                    <Col xs={{span:12,order:2}} md={{span:5,order:1}} className="minh-50vh d-flex align-items-center">
                        <div className="w-100 text-center text-md-start">
                            <h2 className="dispaly-6 fw-bold text-white text-shadow">
                            Training & Practice
                            </h2>
                            <p className="text-white lead">
                            We bring you different training programs & practice opportunity to test your learning with us, these programs include real and practical activities to test your learning till now. Each program includes scoring system, which define amount of score gained by each learner throughout these practices. However, if scoring low, student can re-join the program and reconnect with the training programs provided by our professionals.                            </p>
                            <img src="/img/about-us-8.jpg" className="img-fluid classes-s5" style={imageStyles} fluid alt="logo"/> 
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ClassesS3;