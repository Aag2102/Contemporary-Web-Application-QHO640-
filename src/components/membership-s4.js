import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import Table from "../../node_modules/react-bootstrap/Table";

const imageStyles = {
    maxHeight: '500px',
    maxWidth: '1000px',
    minHeight: '100px',
    minWidth: '100px',
  };

class MembershipS4 extends Component{
    render(){
        return(    
            // <Container fluid className="membership-s4 d-flex minh-50vh align-items-center py-5 bg-secondary border-top border-secondary">
            //     <Row className="mx-0 w-100 px-3 text-shadow">
            //         <Col xs={12} className="py-3">
            //             <h2 className="display-6 text-center text-md-start text-white text-uppercase">
            //                 Lorem ipsum dolor
            //             </h2>
            //         </Col>
            //         <Col xs={12} md={3} className="mx-auto text-center text-md-start">
            //             <p className="initialism text-white">
            //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            //                 tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            //                 quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
            //                 consequat.
            //             </p>
            //         </Col>
            //         <Col md={1} className="d-none d-md-block mx-auto">
            //             <div class=" border-start mx-auto h-100 w-25"></div>
            //         </Col>
            //         <Col xs={12} md={3} className="text-center text-md-start">
            //             <p className="initialism text-white">
            //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            //                 tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            //                 quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
            //                 consequat.
            //             </p>
            //         </Col>
            //         <Col md={1} className="d-none d-md-block mx-auto">
            //             <div class=" border-start mx-auto h-100 w-25"></div>
            //         </Col>
            //         <Col xs={12} md={3} className="mx-auto text-center text-md-start">
            //             <p className="initialism text-white">
            //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            //                 tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            //                 quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
            //                 consequat.
            //             </p>
            //         </Col>
            //     </Row>
            // </Container>
            <Container fluid className="d-flex minh-50vh align-items-center py-5 bg-secondary border-top border-secondary">
            <Row className="mx-0 w-100 px-3 text-shadow">
                <Col xs={12} className="py-3">
                    <h2 className="display-6 text-center text-md-start text-white text-uppercase">
                    Our mission
                    </h2>
                </Col>
                <Col xs={12} md={3} className="mx-auto text-center text-md-start">
                    <p><strong>Our mission </strong></p>
                    <p className="initialism text-white">
                    Our mission is to provide wide range of digital learning program that assist students to learn about online learning and improve technical skills to access benefit of online learning. We include different workshops, classes and training program to improve technical skills of a student. 
                    </p>
                <img src="/img/about-us-3.png" className="img-fluid classes-s4" style={imageStyles} fluid alt="logo"/> <br />

                </Col>
                <Col md={1} className="d-none d-md-block mx-auto">
                    <div class=" border-start mx-auto h-100 w-25"></div>
                </Col>
                <Col xs={12} md={3} className="text-center text-md-start">
                <p><strong>Our vision  </strong></p>
                    <p className="initialism text-white">
                    Our vision is to become leading digital training providers in the UK, values lies in offering quality of training program which help each student to learn about digital literacy and understand importance of learning digital programs to improve performance in online learning.
                    </p>
                <img src="/img/about-us-4.png" className="img-fluid classes-s4" style={imageStyles} fluid alt="logo"/> <br />

                </Col>
                <Col md={1} className="d-none d-md-block mx-auto">
                    <div class=" border-start mx-auto h-100 w-25"></div>
                </Col>
                <Col xs={12} md={3} className="mx-auto text-center text-md-start">
                <p><strong>Our people  </strong></p>
                    <p className="initialism text-white">
                    We include dedicated team who are ready to provide different learning classes which assist student to learn about digital world. Student will utilize digital technologies and improve technical skills with our skilled team members, our team include experts, advisor, leaders and educators who share knowledge with student and improve their technical skills.
                    </p>
                <img src="/img/about-us-5.png" className="img-fluid classes-s4" style={imageStyles} fluid alt="logo"/> <br />

                </Col>

            </Row>
        </Container>
        );
    }
}

export default MembershipS4;