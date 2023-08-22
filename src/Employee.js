import React from 'react';
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/esm/Table';
import { useParams } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

 function Employee() {
    const [employee, setEmployee] = useState({});
    const { id } = useParams()
    console.log(useParams())
    useEffect(() => {
        
        fetch("http://localhost:5221/api/Employee/" + id)
            .then(res => res.json())
            .then((result) => { setEmployee(result); }
            );
    }, {});
    return (
        
        // <Table striped bordered hover variant="light">
        // <thead>
        //   <tr>
        //     <th>ID</th>
        //     <th> Name</th>
        //     <th>Email</th>
        //     <th>Department</th>
        //   </tr>
        // </thead>
        // <tbody>
        //   <tr>
        //     <td>{employee.id}</td>
        //     <td>{employee.name}</td>
        //     <td>{employee.email}</td>
        //     <td>{employee.department}</td>
        //   </tr>
        //   </tbody>
        //   </Table>
        
  
    <Card style={{ width: '18rem' ,bg:'red'}}>
      <Card.Img variant="top" src="/Images/Profile.png" style={{padding:'10px' , colour:"green"}} />
      <Card.Body>
        <Card.Title>Employee Data</Card.Title>
        <Card.Text>Employee Id :
         {employee.id}
         </Card.Text>
         <Card.Text>
          Employee Name :
         {employee.name}
         </Card.Text>
         <Card.Text>
          Employee Email :
         {employee.email}
         </Card.Text>
         <Card.Text>
          Employee Department :
         {employee.department}
        </Card.Text>
        <Button variant="outline-dark" href='/ListEmployee'>Back</Button>
      </Card.Body>
    </Card>
  );
}

export default Employee;