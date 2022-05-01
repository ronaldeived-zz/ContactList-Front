import React from "react";
import api from "../services/api";
import { Form, Row, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
export default class AddPerson extends React.Component {
    state = {
        name: "",
        email: "",
        picture: ""
    };

    add = async (e) => {
        e.preventDefault();
        if (this.state.firstName === "" || this.state.lastName === "") {
            alert("ALl the fields are mandatory!");
            return;
        }


        const response = await api.post("/person", this.state);
        console.log(response);
        this.props.history.push("/");
    };
    render() {
        return (
            <div className="ui fixed menu">
                <div className="ui container center">
                    <Link to="/">
                        <Button variant="outline-primary">Back</Button>
                    </Link>
                    <Form noValidate onSubmit={this.add}>
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                md="4"
                                controlId="validationFormik101"
                                className="position-relative"
                            >
                                <Form.Label>First name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="firstName"
                                    onChange={(e) => this.setState({ firstName: e.target.value })}
                                />
                                <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group
                                as={Col}
                                md="4"
                                controlId="validationFormik102"
                                className="position-relative"
                            >
                                <Form.Label>Last name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="lastName"
                                    onChange={(e) => this.setState({ lastName: e.target.value })}
                                />

                                <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Form.Group className="position-relative mb-3">
                            <Form.Label>File</Form.Label>
                            <Form.Control
                                type="file"
                                required
                                name="picture"
                                onChange={(e) => this.setState({ picture: e.target.value })}
                            />
                            <Form.Control.Feedback type="invalid" tooltip>Error File</Form.Control.Feedback>
                        </Form.Group>
                        <Button type="submit">Save Person</Button>
                    </Form>
                </div>
            </div>
        );
    }
}