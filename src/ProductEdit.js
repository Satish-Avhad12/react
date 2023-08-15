import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
export function ProductEdit(){
    const[product,setproduct]=useState({})
    const {id}=useParams();

    const navigate=useNavigate();
    useEffect(()=>
    {fetch("http://localhost:8080/api/productsById/"+id)
    .then(res=> res.json()).then(result=>{setproduct(result)});},{});

    const handleChange=(event)=>{
      const name= event.target.name
      const value= event.target.value
      setproduct(values=>({...values ,[name]: value} ))
    }

    const handleSubmit = (event) => {
      let demo = JSON.stringify(product);
      console.log(JSON.parse(demo));
      fetch("http://localhost:8080/api/products/" + id, {
          method: 'PUT',
          headers: { 'Content-type': 'application/json' },
          body: demo
      }).then(r => { console.log(r) })
      event.preventDefault();
      navigate('/')
    }
     return (
        <Form onSubmit={handleSubmit} >
        <Row className="mb-3">
    
      <Form.Label column lg={2} className='frm'>Id:</Form.Label>
    
      <Form.Control  placeholder="Enter Id"
      input type="text"
      name='id'
      value={product.id || ""}
      onChange={handleChange}
       />
       <br/>
    
    <Form.Label column lg={2} className='frm'>Name:</Form.Label>
    <Form.Control placeholder="Enter name" 
    input type='text'
    name='name'
    value={product.name || ""}
    onChange={handleChange}
    
    />

      <Form.Label column lg={2} className='frm' >Quantity:</Form.Label>
      <Form.Control placeholder="Enter quantity"
      input type = "text"
      name='qty' 
      value={product.qty || ""}
      onChange={handleChange}
      />
   
    <Form.Label column lg={2} className='frm'>Price</Form.Label>
    <Form.Control placeholder="Enter price" 
    type="text"
    name="price"
    value={product.price || ""}
    onChange={handleChange}
    />
    </Row>
  <Button variant='outline-dark' type="submit" className='bton' >
    Submit
  </Button>
  </Form>
);
}