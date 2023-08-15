import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom"

export function Customeradd() {
  const [customer, setcustomer] = useState({});
    
    let navigate = useNavigate();
    useEffect(() => {
        fetch("http://localhost:8081/person" )
            .then(res => res.json())
            .then((result) => {
                setcustomer(result);
            }
            );
    }, {});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setcustomer(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {
        let demo = JSON.stringify(customer);
        console.log(JSON.parse(demo));
        fetch("http://localhost:8081/person", {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: demo
        }).then(r => { console.log(r) })
      
        navigate('/ListCustomer');

        //alert(customer);
    }
  return (
     <div>
    <Form onSubmit={handleSubmit}>
      <br></br>
      <br></br>
      <Form.Group >
        <Form.Label >Enter  FirstName :</Form.Label>
        <Form.Control type="text" placeholder='First Name' name="firstname" onChange={handleChange} />
        
      </Form.Group>
      <br></br>
      <Form.Group >
        <Form.Label >Enter LastName :</Form.Label>
        <Form.Control type="text" placeholder='last name' name="lastname" onChange={handleChange}/>
      </Form.Group>
      <br></br>
      
      <br></br>
      <Button variant='success' type="submit" >
        Submit
      </Button>
    </Form>
    </div>
  );
}
export default Customeradd;