import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import Table from "../../node_modules/react-bootstrap/Table";

const imageStyles = {
    maxHeight: '500px',
    maxWidth: '500px',
    minHeight: '100px',
    minWidth: '100px',
  };

class ClassesS2 extends Component{
    render(){
        return(    
            <Container fluid className="d-flex minh-50vh bg-light align-items-center py-5 border-top border-secondary">
                <Row className="mx-0 w-100">
                    <Col xs={12} md={{span:6,offset:6}} lg={{span:5,offset:7}} 
                        className="minh-50vh d-flex align-items-center">
                        <div className="w-100 text-center text-md-start">
                            <h2 className="dispaly-6 fw-bold text-light text-shadow">
                            Workshops
                            </h2>
                            <p className="text-black">
                            Our wide range of workshops include different programs that allow student to improve existing technical knowledge, workshop may include those practical activities that help student to learn technical skills step by step. These workshop are designed in such a way that it suits to learning ability of each learner, students have option to customize workshop according to their requirement and access the potential benefit we are offering.
                            </p>
                            <img src="/img/about-us-7.jpg" className="img-fluid classes-s5" style={imageStyles} fluid alt="logo"/> 

                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ClassesS2;