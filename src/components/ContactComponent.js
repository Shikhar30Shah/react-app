import React, { useState } from 'react';
import { Breadcrumb, BreadcrumbItem, Form, Button, Label, FormGroup, Input, Col, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';

function Contact() {

    const [form, setForm] = useState({
        firstname: '',
        lastname: '',
        telnum: '',
        email: '',
        agree: false,
        contactType: "Tel. ",
        message: '',
    });

    const [touched, setTouched] = useState({
            firstname: false,
            lastname: false,
            telnum: false,
            email: false
    })

    const validate = ( firstname, lastname, telnum, email ) => {
        const errors = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: ''
        };

        if (touched.firstname && firstname.length < 2)
            errors.firstname = 'First Name should be >= 2 characters';
        else if (touched.firstname && firstname.length > 15) 
            errors.firstname = 'First Name should be <= 15 characters';
        
        if (touched.lastname && lastname.length < 2)
            errors.lastname = 'Last Name should be >= 2 characters';
        else if (touched.lastname && lastname.length > 15)
            errors.lastname = 'Last Name should be <= 15 characters';

        const reg = /^\d+$/;
        if (touched.telnum && !reg.test(telnum))
            errors.telnum = 'Enter valid Telephone Number here';
        if (touched.email && email.split('').filter(x => x ==='@').length !== 1)
            errors.email = 'Enter valid Email-Address here';
        
        return errors;
    }

    const handleBlur = (field) => (e) => {
        setTouched({
            ...touched, [field]: true 
        })
    }

    const handleChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        setForm({
            ...form, [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Current State is: " + JSON.stringify([form, touched]));
        alert("Current State is: " + JSON.stringify([form, touched]));
    }

    const errors = validate(form.firstname, form.lastname, form.telnum, form.email);
    
    return(
        
        <div className="container">

            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                </Breadcrumb>

                <div className="col-12">
                    <h3>Contact Us</h3>
                    <hr/>
                </div>
            </div>

            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                    <h5>Our Address</h5>
                    <address>
                        121, Raisen Road<br />
                        Jubligate 2, Bhopal<br />
                        India<br />
                        <i className="fa fa-phone"></i>: +91 1234 5678 91<br />
                        <i className="fa fa-fax"></i>: +0755 8765 432<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:funn@food.net">fun@food.net</a>
                    </address>
                </div>

                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>

                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+911234567891"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:fun@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>

            <div className="row row-content">
                <div className="col-12">
                    <h3>Send Us Your Feedback</h3>
                </div>
                <div className="col-12 col-md-9">
                    <Form onSubmit={handleSubmit}>
                        <FormGroup row>
                            <Label htmlFor="firstname" md={2}>
                                First Name
                            </Label>
                            <Col md={10}>
                                <Input type="text" id="firstname" name="firstname" placeholder="First Name" 
                                    value={form.firstname} 
                                    valid={errors.firstname === ''}
                                    invalid={errors.firstname !== ''}
                                    onBlur={handleBlur('firstname')} 
                                    onChange={handleChange} />
                                <FormFeedback> {errors.firstname} </FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="lastname" md={2}>
                                Last Name
                            </Label>
                            <Col md={10}>
                                <Input type="text" id="lastname" name="lastname" placeholder="Last Name" 
                                    value={form.lastname}
                                    valid={errors.lastname === ''}
                                    invalid={errors.lastname !== ''}
                                    onBlur={handleBlur('lastname')}
                                    onChange={handleChange} />
                                <FormFeedback> {errors.lastname} </FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="telnum" md={2}>
                                Contact Tel.
                            </Label>
                            <Col md={10}>
                                <Input type="text" id="telnum" name="telnum" placeholder="Telephone Number" 
                                    value={form.telnum} 
                                    valid={errors.telnum === ''}
                                    invalid={errors.telnum !== ''}
                                    onBlur={handleBlur('telnum')}
                                    onChange={handleChange} />
                                <FormFeedback> {errors.telnum} </FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="email" md={2}>
                                Email
                            </Label>
                            <Col md={10}>
                                <Input type="email" id="email" name="email" placeholder="Email" 
                                    value={form.email}
                                    valid={errors.email === ''}
                                    invalid={errors.email !== ''}
                                    onBlur={handleBlur('email')}
                                    onChange={handleChange} />
                                <FormFeedback> {errors.email} </FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{size: 6, offset: 2 }}>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" name="agree" checked={form.agree} onChange={handleChange} />{" "}
                                        <strong>May we contact you ?</strong>
                                    </Label>
                                </FormGroup>
                            </Col>
                            <Col md={{ size: 3, offset: 1}}>
                                <Input type="select" name="contactType" value={form.contactType} onChange={handleChange}>
                                    <option>Telephone</option>
                                    <option>Email</option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Input type="textarea" id="message" name="message" rows="12" value={form.message} onChange={handleChange}/>
                                </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{ size: 10, offset: 2}}>
                                <Button type="submit" color="primary">
                                    Send Feedback
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Contact;