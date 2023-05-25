import React, { Component } from "react";
import {APP_LINKS} from "../config";
import Button from "../../node_modules/react-bootstrap/Button";
import Col from "../../node_modules/react-bootstrap/Col";
import Container from "../../node_modules/react-bootstrap/Container";
import Form from "../../node_modules/react-bootstrap/Form";
import Row from "../../node_modules/react-bootstrap/Row";
import update from "react-addons-update";
import cookieApi from "../api/cookie_api";
import contactFormApi from "../api/contact_form_api";

class ContactForm extends Component {
    constructor() {
        super();
        this.state = {
            formData: {
                ourService: "",
                recommend: "",
                improvement: "",
                thoughts: "",
                followUp: ""
            }
        };
    }
    updateFormData(ev) {
        var updateData;
        if (ev.target.name === "recommend") {
            updateData = update(this.state.formData, {
                recommend: { $set: ev.target.value }
            });
            this.setState({ formData: updateData });
        }
        else if (ev.target.name === "improvement") {
            updateData = update(this.state.formData, {
                improvement: { $set: ev.target.value }
            });
            this.setState({ formData: updateData });
        }
        else if (ev.target.name === "ourService") {
            updateData = update(this.state.formData, {
                ourService: { $set: ev.target.value }
            });
            this.setState({ formData: updateData });
        }
        else if (ev.target.name === "thoughts") {
            updateData = update(this.state.formData, {
                thoughts: { $set: ev.target.value }
            });
            this.setState({ formData: updateData });
        }
         else if (ev.target.name === "followUp") {
            updateData = update(this.state.formData, {
                followUp: { $set: ev.target.value }
            });
            this.setState({ formData: updateData });
        }
    }

    sendForm(){
        if(this.state.formData.recommend.length!==0
        && this.state.formData.improvement.length!==0
        && this.state.formData.ourService.length!==0
        && this.state.formData.thoughts.length!==0
        && this.state.formData.followUp.length!==0){
            let formData = contactFormApi.getFormData(this.state.formData,cookieApi.getCookie("msgcount"));
            contactFormApi.sendData(this.props.backNav,formData,cookieApi.setCookie,APP_LINKS.messages);
            this.clearForm();
        }
    }

    clearForm(){
        this.setState({ formData: contactFormApi.clearData() });       
    }

    render() {
        return (
            <Container fluid className={"align-items-center px-0 py-5 border-top border-secondary d-flex minh-50vh " + this.props.classExt}>
                <Row className="mx-auto text-center w-100">
                    <Col xs={11} md={6} className="mx-auto p-0 d-flex align-items-center">
                        <Form className="text-start w-100 border border-secondary p-4 rounded bg-dark opacity-9 shadow text-secondary fw-bold"
                            autoComplete="off"
                            method="POST">
                            <div className="border-bottom border-secondary mb-4">
                                <p className="font-weight-bold mb-1">
                                    Help us improve
                                </p>
                            </div>
                            <Form.Group controlId="formFirstName">
                                <Form.Label>How often do you visit our services?</Form.Label>
                                <Form.Control type="text"
                                    className="rounded-pill bg-dark border-secondary text-white opacity-8"
                                    maxLength="50"
                                    name="ourService"
                                    onChange={this.updateFormData.bind(this)} 
                                    value={this.state.formData.ourService}
                                    required/>
                            </Form.Group>
                            <Form.Group controlId="formLastName" className="mt-3">
                                <Form.Label>Do you recommend our services to your friends?</Form.Label>
                                <Form.Control type="text"
                                    className="rounded-pill bg-dark border-secondary text-white opacity-8"
                                    maxLength="50"
                                    name="recommend"
                                    onChange={this.updateFormData.bind(this)} 
                                    value={this.state.formData.recommend}
                                    required/>
                            </Form.Group>
                            <Form.Group controlId="formLastName" className="mt-3">
                                <Form.Label>Do you feel any improvement after accessing our services</Form.Label>
                                <Form.Control type="text"
                                    className="rounded-pill bg-dark border-secondary text-white opacity-8"
                                    maxLength="50"
                                    name="improvement"
                                    onChange={this.updateFormData.bind(this)} 
                                    value={this.state.formData.improvement}
                                    required/>
                            </Form.Group>
                            <Form.Group controlId="formMessage" className="mt-3">
                                <Form.Label>Describe your thoughts.</Form.Label>
                                <Form.Control as="textarea"
                                    rows={4}
                                    className="bg-dark border-secondary text-white opacity-8"
                                    maxLength="250"
                                    name="thoughts"
                                    onChange={this.updateFormData.bind(this)} 
                                    value={this.state.formData.thoughts}
                                    required/>
                            </Form.Group>
                            <Form.Group controlId="formLastName" className="mt-3 d-flex align-items-center">
                              <Form.Label className="mr-3">
                                Receive personal follow-up to your feedback.
                              </Form.Label>
                              <div className="flex-grow-1">
                                <Form.Check
                                  type="radio"
                                  className="rounded-pill bg-dark border-secondary text-white opacity-8"
                                  name="followUp"
                                  onChange={this.updateFormData.bind(this)}
                                  value={this.state.formData.followUp}
                                  required
                                />
                              </div>
                            </Form.Group>

                            <div className="w-100 text-end mt-3">
                                <Button variant="outline-light"
                                    type="reset"
                                    onClick={this.clearForm.bind(this)}
                                    className="mx-1 rounded-pill border-secondary text-secondary">
                                    Clear
                                </Button>
                                <Button
                                    variant="outline-light"
                                    className="mx-1 rounded-pill border-secondary text-secondary"
                                    onClick={this.sendForm.bind(this)}>
                                    Send
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ContactForm;