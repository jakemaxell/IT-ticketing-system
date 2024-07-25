import React, { useState }  from 'react'
import NavBar from "./Navbar";
import { Form, ButtonToolbar, Button, Input } from 'rsuite';
import { useNavigate } from 'react-router-dom';

const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

function Submit(){

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        ticketType: 'SOFTWARE',
        description: ''
    });

    const handleInputChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const submitTicket = async (event) => {
        event.preventDefault();

        try{
            const response =  await fetch("http://localhost:8080/ticket-api/create-ticket", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
        } catch (error) {
            console.log("Error: " + error);
        }

        navigate("/");
        alert("Thank you for submitting your ticket!");
    };

    return (
        <div>
            <NavBar/>
            <Form>
                <Form.Group controlId="firstName">
                    <Form.ControlLabel>First Name</Form.ControlLabel>
                    <Form.Control name="firstName" value={formData.firstName} onChange={value => handleInputChange('firstName', value)}/>
                </Form.Group>

                <Form.Group controlId="lastName">
                    <Form.ControlLabel>Last Name</Form.ControlLabel>
                    <Form.Control name="lastName" value={formData.lastName} onChange={value => handleInputChange('lastName', value)}/>
                </Form.Group>

                <Form.Group controlId="email">
                    <Form.ControlLabel>Email</Form.ControlLabel>
                    <Form.Control name="email" type="email" value={formData.email} onChange={value => handleInputChange('email', value)}/>
                    <Form.HelpText tooltip>Email is required</Form.HelpText>
                </Form.Group>

                <Form.Group controlId="description">
                    <Form.ControlLabel>Description</Form.ControlLabel>
                    <Form.Control rows={5} name="description" accepter={Textarea} value={formData.description} onChange={value => handleInputChange('description', value)}/>
                </Form.Group>

                <Form.Group>
                    <ButtonToolbar>
                        <Button onClick={submitTicket} appearance="primary">Submit</Button>
                        <Button appearance="default">Cancel</Button>
                    </ButtonToolbar>
                </Form.Group>
            </Form>
        </div>
    );
};

export default Submit;