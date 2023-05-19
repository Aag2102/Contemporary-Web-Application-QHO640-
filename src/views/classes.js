import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import ClassesS1 from "../components/classes-s1";
import ClassesS2 from "../components/classes-s2";
import ClassesS3 from "../components/classes-s3";

class Classes extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <ClassesS1/>
                <ClassesS2/>
                <ClassesS3/>
            </Container>    
        );
    }
}

export default Classes;