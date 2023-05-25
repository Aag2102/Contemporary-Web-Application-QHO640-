import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";

const imageStyles = {
    maxHeight: '500px',
    maxWidth: '1000px',
    minHeight: '100px',
    minWidth: '100px',
  };

class MembershipS3 extends Component{
    render(){
        return(    
            <Container fluid className="d-flex minh-50vh align-items-center py-5 bg-secondary border-top border-secondary">
                <Row className="mx-0 w-100 px-3 text-shadow">
                    {/* <Col xs={12} md={7} className="minh-25vh d-none d-md-block"></Col>
                    <Col xs={12} md={5} className="minh-50vh d-flex align-items-center">
                        <div className="w-100 text-center text-md-start pt-5 text-shadow">
                            <h2 className="dispaly-6 fw-bold text-light text-shadow">
                                Dolor sit amet         
                            </h2>
                            <p className="text-white">
                                Sed do eiusmod tempor incididunt ut labore et dolore magna 
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor in reprehenderit in voluptate velit 
                                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                                occaecat cupidatat non proident, sunt in culpa qui officia 
                                deserunt mollit anim id est laborum.      
                            </p>
                        </div>
                    </Col> */}
                     <Col xs={12} className="py-3">
                        <h2 className="display-6 text-center text-md-start text-white text-uppercase">
                        Challenges faced by students:
                        </h2>
                    </Col>
                    <Col xs={12} md={4} className="mx-auto text-center text-md-start">
                        <p><strong>Dependability: </strong></p>
                        <p className="initialism text-white">
                        Student who does not carry technical skills and knowledge experience such type of issue where they have to be dependable on someone who carry technical knowledge. There are many students who unable to access benefits related to technology due to lack of technical knowledge and expertise. This increase dependability and pressure student to remain dependable on other individual, this can impact overall performance of student and might reduce their academic and non-academic performance.
                        </p>
                    </Col>
                    <Col md={1} className="d-none d-md-block mx-auto">
                        <div class=" border-start mx-auto h-100 w-25"></div>
                    </Col>

                    <Col xs={12} md={4} className="mx-auto text-center text-md-start">
                        <p><strong>Poor performance: </strong></p>
                        <p className="initialism text-white">
                        Lack of technical knowledge and skills create issues such as poor performance, student experience several types of challenges if they lack in technical knowledge and expertise. Performance of each student is significantly impacted due to such issues, student might unable to access variety of services offered by the organization. Moreover, lack of technical knowledge become road block to the success of individual learner. Student might fail to gain career opportunities due to lack of knowledge and skills carried by the learner in process.
                        </p>
                    </Col>
                    
                </Row>
            </Container>
        );
    }
}

export default MembershipS3;