import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom"

 export function Productcreate() {
  const [product, setproduct] = useState({});
    
    let navigate = useNavigate();
    useEffect(() => {
        fetch("http://localhost:8080/api/products" )
            .then(res => res.json())
            .then((result) => {
                setproduct(result);
            }
            );
    }, {});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setproduct(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {
        let demo = JSON.stringify(product);
        console.log(JSON.parse(demo));
        fetch("http://localhost:8080/api/products", {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: demo
        }).then(r => { console.log(r) })
      
        navigate('/');

        //alert(product);
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
        <Form.Label >Enter Quantity  :</Form.Label>
        <Form.Control type="number" placeholder='Quantity' name="qty" onChange={handleChange}/>
      </Form.Group>
      <br></br>
      <Form.Group >
        <Form.Label >Enter Price :</Form.Label>
        <Form.Control type="number" placeholder='Price' name="price" onChange={handleChange} />
      </Form.Group>
      <br></br>
      <Button variant='success' type="submit" >
        Submit
      </Button>
    </Form>
  );
}