import React, { Component } from 'react'
import './signup.css'
import {
    Button, Form, FormGroup, Label, Input, Col
} from 'reactstrap';
import logo from '../pictures/login.png'
import { Link } from 'react-router-dom';
// import { Control, LocalForm, Errors } from 'react-redux-form';





class signup extends Component {

    constructor() {
        super();
        this.state = {
            fields: {},
            errors: {}
        }

        this.handleChange = this.handleChange.bind(this);
        this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

    };

    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });

        // if(this.validateForm()){

        // }
    }

    submituserRegistrationForm(e) {
        e.preventDefault();
        if (this.validateForm()) {
            alert('Current State is: ' + JSON.stringify(this.state));
            let fields = {};
            fields["username"] = "";
            fields["emailid"] = "";
            fields["mobileno"] = "";
            fields["password"] = "";
            fields["confirm_password"] = "";
            this.setState({ fields: fields });

        }

    }

    validateForm() {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["username"]) {
            formIsValid = false;
            errors["username"] = "*Please enter your username.";
        }

        if (typeof fields["username"] !== "undefined") {
            if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["username"] = "*Please enter alphabet characters only.";
            }
        }

        if (!fields["emailid"]) {
            formIsValid = false;
            errors["emailid"] = "*Please enter your email-ID.";
        }

        if (typeof fields["emailid"] !== "undefined") {
            //regular expression for email validation
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["emailid"])) {
                formIsValid = false;
                errors["emailid"] = "*Please enter valid email-ID.";
            }
        }

        if (!fields["mobileno"]) {
            formIsValid = false;
            errors["mobileno"] = "*Please enter your mobile no.";
        }

        if (typeof fields["mobileno"] !== "undefined") {
            if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
                formIsValid = false;
                errors["mobileno"] = "*Please enter valid mobile no.";
            }
        }

        if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "*Please enter your password.";
        }

        if (typeof fields["password"] !== "undefined") {
            if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                formIsValid = false;
                errors["password"] = "*Please enter secure and strong password.";
            }
        }

        if (!fields["confirm_password"]) {
            formIsValid = false;
            errors["confirm_password"] = "*Please enter your password.";

        }

        if (fields["confirm_password"] !== fields["password"]) {
            formIsValid = false;
            errors["confirm_password"] = "Your password dosent match";

        }
        this.setState({
            errors: errors
        });
        return formIsValid;


    }


    render() {
        // const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email);
        return (
            <div>
                <div class="bg-image"></div>

                <div class="bg-text">
                    <div className="col-12 col-md-12">
                    <Link to="/home"><img className="mb-4" src={logo} alt="" width="150" height="72"
                               style={{borderRadius: "20px"}} /></Link>
                        <div className="signup_heading">
                            <h3>Welcome to the world of Books</h3>
                        </div>
                        <div id="register" >
                            <Form method="post" name="userRegistrationForm" onSubmit={this.submituserRegistrationForm} >
                                <FormGroup row>
                                    <Label  md={3}>Name</Label>
                                    <Col md={9}>
                                        <Input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} />
                                    </Col>
                                </FormGroup>
                                    <div className="errorMsg">{this.state.errors.username}</div>
                                <FormGroup row>
                                    <Label  md={3}>Email</Label>
                                    <Col md={9}>
                                        <Input  type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange} />
                                    </Col>
                                </FormGroup>
                                    <div className="errorMsg">{this.state.errors.emailid}</div>
                                <FormGroup row>
                                    <Label  md={3}>Mobile no:</Label>
                                    <Col md={9}>
                                        <Input  type="text" name="mobileno" value={this.state.fields.mobileno} onChange={this.handleChange} />
                                    </Col>
                                </FormGroup>
                                    <div className="errorMsg">{this.state.errors.mobileno}</div>
                                <FormGroup row>
                                    <Label  md={3}>Password</Label>
                                    <Col md={9}>
                                        <Input  type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
                                    </Col>
                                </FormGroup>
                                    <div className="errorMsg">{this.state.errors.password}</div>

                                <FormGroup row>
                                    <Label  md={3}>Confirm Password</Label>
                                    <Col md={9}>
                                        <Input  type="password" name="confirm_password" value={this.state.fields.confirm_password} onChange={this.handleChange} />
                                    </Col>
                                </FormGroup>
                                    <div className="errorMsg">{this.state.errors.confirm_password}</div>
                                <FormGroup row>
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        register
                                    </Button>
                                </Col>
                            </FormGroup>
                            </Form>
                        </div>
                    </div>

                </div>
            </div>
        );
    }

}


export default signup