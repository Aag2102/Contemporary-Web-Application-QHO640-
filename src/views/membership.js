import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import MembershipS1 from "../components/membership-s1";
import MembershipS2 from "../components/membership-s2";
import MembershipS3 from "../components/membership-s3";
import MembershipS4 from "../components/membership-s4";

class Membership extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <MembershipS1/>
                <MembershipS2/>
                <MembershipS3/>
                <MembershipS4/>
            </Container>    
        );
    }
}

export default Membership;