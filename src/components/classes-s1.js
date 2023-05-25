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

class ClassesS1 extends Component{
    render(){
        return(    
            <Container fluid className="d-flex minh-25vh align-items-center py-5 pt-5">
                <Row className="mx-0 w-100 mt-5">
                    <Col xs={{span:12,order:1}} md={{span:7,order:2}} className="minh-25vh"></Col>
                    <Col xs={{span:12,order:2}} md={{span:5,order:1}} className="minh-50vh d-flex align-items-center">
                        <div className="w-100 text-center text-md-start">
                            <h2 className="dispaly-6 fw-bold text-white text-shadow">
                            Online Classes
                            </h2>
                            <p className="text-white lead">
                            We bring you best-in-class E-learning classes that include wide range of different chapters that cover technical learning. These classes are conducted by professional team with years of experience in providing training to learn digital skills. E-learning classes are customizable; student can customize the learning according to their requirement. For example, if learner want to skip virtual learning training, then they can skip to next module for other area of digital learning.
                            </p>
                            <img src="/img/about-us-6.png" className="img-fluid classes-s5" style={imageStyles} fluid alt="logo"/> 
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ClassesS1;