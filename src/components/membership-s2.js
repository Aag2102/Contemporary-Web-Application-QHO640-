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

class MembershipS2 extends Component{
    render(){
        return(    
            <Container fluid className="d-flex minh-50vh align-items-center py-5 bg-secondary border-top border-secondary">
                <Row className="mx-0 w-100 px-3 text-shadow">
                    <Col xs={12} className="py-3">
                        <h2 className="display-6 text-center text-md-start text-white text-uppercase">
                        Importance of technical knowledge:
                        </h2>
                    </Col>
                    <Col xs={12} md={3} className="mx-auto text-center text-md-start">
                        <p><strong>Improve performance: </strong></p>
                        <p className="initialism text-white">
                        Technical knowledge is significantly important to every student, today’s digitally advance world demand technical knowledge and skills which allow each student to become employment ready. We offer services and courses that help learner to improve technical knowledge and improve performance. We focus on solving common problem experienced by the students during the academic and non-academic sessions. It is important for student to access all our services, courses and workshops offered by our end to improve overall performance.
                        </p>
                    </Col>
                    <Col md={1} className="d-none d-md-block mx-auto">
                        <div class=" border-start mx-auto h-100 w-25"></div>
                    </Col>
                    <Col xs={12} md={3} className="text-center text-md-start">
                    <p><strong>Increase productivity:  </strong></p>
                        <p className="initialism text-white">
                        Productivity of each student is improved with the help of these learning courses which allow student to explore wide range of course and skill development programs. It is important for student to learn about technical skills as this help them to access information online and manage academic assignment. Our services improve performance of each student and improve their technical knowledge, this help them to access virtual classes, manage projects online by their own, access online assignment and submit it by their own.
                        </p>
                    </Col>
                    <Col md={1} className="d-none d-md-block mx-auto">
                        <div class=" border-start mx-auto h-100 w-25"></div>
                    </Col>
                    <Col xs={12} md={3} className="mx-auto text-center text-md-start">
                    <p><strong>Career development:  </strong></p>
                        <p className="initialism text-white">
                        It is significantly important for each learner to understand that technical knowledge remain most important in the future and development of the career. Student can access career development through such rare skills which remain most employable and demanding in the market. We offer those training & practice program which allow student to learn about technology and utilization of such technology to access the benefits. Moreover, student will develop their career after gaining and capturing skills and knowledge necessarily required in 21st century.
                        </p>
                    </Col>
                    <img src="/img/about-us-2.jpg" className="img-fluid classes-s4" style={imageStyles} fluid alt="logo"/> <br />

                </Row>
            </Container>
        );
    }
}

export default MembershipS2;