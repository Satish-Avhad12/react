import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
export function Employeeedit(props) {
    const [employee, setEmployee] = useState({});
    const { id } = useParams();
    let navigate = useNavigate();
    useEffect(() => {
        fetch("http://localhost:5221/api/Employee/" + id)
            .then(res => res.json())
            .then((result) => {
                setEmployee(result);
            }
            );
    }, {});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setEmployee(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {
        let demo = JSON.stringify(employee);
        console.log(JSON.parse(demo));
        fetch("http://localhost:5221/api/Employee/" + id, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: demo
        }).then(r => { console.log(r) })
        event.preventDefault();
        navigate('/');

        alert(employee);
    }
    return ( 
    
    <Form onSubmit={handleSubmit} >
        <Row className="mb-3">
    
      <Form.Label column lg={2} className='frm'>Id:</Form.Label>
    
      <Form.Control  placeholder="Enter Id"
      input type="text"
      name='id'
      value={employee.id || ""}
      onChange={handleChange}
       />
       <br/>
    
    <Form.Label column lg={2} className='frm'>Name:</Form.Label>
    <Form.Control placeholder="Enter name" 
    input type='text'
    name='name'
    value={employee.name || ""}
    onChange={handleChange}
    
    />

      <Form.Label column lg={2} className='frm' >Email:</Form.Label>
      <Form.Control placeholder="Enter email"
      input type = "text"
      name='email' 
      value={employee.email || ""}
      onChange={handleChange}
      />
   
    <Form.Label column lg={2} className='frm'>Department</Form.Label>
    <Form.Control placeholder="Department" 
    type="text"
    name="department"
    value={employee.department || ""}
    onChange={handleChange}
    />
    </Row>
  <Button variant='outline-dark' type="submit" className='bton' >
    Submit
  </Button>
  </Form>
);
    }

        // //*<form onSubmit={handleSubmit}>
        //    // <label>code:</label>
        //    // <input
        //         type="text"
        //         name="id"
        //     value={employee.id || ""}
        //     onChange={handleChange}
        //             />
        //     <br />            <label>name:</label>
        //     <input
        //         type="text"
        //         name="name"
        //         value={employee.name || ""}
        //         onChange={handleChange}
        //     />
        //     <br />            <label>Email:</label>
        //     <input
        //         type="text"
        //         name="email"
        //         value={employee.email || ""}
        //         onChange={handleChange}
        //     />
        //     <br />            <label>Department:</label>
        //     <input
        //         type="text"
        //         name="department"
        //         value={employee.department || ""}
        //         onChange={handleChange}
        //     />
        //     <br />
        //     <input type="submit" />
    //</form> */}
    
          
    
  

