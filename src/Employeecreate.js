import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom"

 export function Employeecreate() {
  const [employee, setEmployee] = useState({});
    
    let navigate = useNavigate();
    useEffect(() => {
        fetch("http://localhost:5221/api/Employee" )
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
        fetch("http://localhost:5221/api/Employee", {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: demo
        }).then(r => { console.log(r) })
      
        navigate('/');

        alert(employee);
    }
  return (
     
    <Form onSubmit={handleSubmit}>
      <br></br>
      <br></br>
      <Form.Group >
        <Form.Label >Enter Name :</Form.Label>
        <Form.Control type="text" placeholder='Name' name="name" onChange={handleChange} />
        
      </Form.Group>
      <br></br>
      <Form.Group >
        <Form.Label >Enter Email :</Form.Label>
        <Form.Control type="email" placeholder='Email' name="email" onChange={handleChange}/>
      </Form.Group>
      <br></br>
      <Form.Group >
        <Form.Label >Enter Department :</Form.Label>
        <Form.Control type="text" placeholder='Department' name="department" onChange={handleChange} />
      </Form.Group>
      <br></br>
      <Button variant='outline dark' type="submit" className='bton'>
        Submit
      </Button>
    </Form>
  );
}

