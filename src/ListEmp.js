import React from 'react';
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
export function ListEmp(props) {
    const [employees, setEmployee] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5221/api/Employee/")
            .then(res => res.json())
            .then((result) => { setEmployee(result); }
            );
    }, []);
    return (
        <div>
            <h2 className="text-center">Employees Data...</h2>
            <br></br>
            
            <Button variant="outline-primary" href={'/empadd'}>Create Employee</Button>
            <br></br>
            <br></br>
            <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>ID</th>
          <th> Name</th>
          <th>Email</th>
          <th>Department</th>
          <th>Show</th>
          <th>Update</th>
          <th>Remove</th>
          
        </tr>
      </thead>
      <tbody>
        {employees.map(emp => (
                        <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.email}</td>
                            <td>{emp.department}</td>
                            <td> <Button variant="success" href={'/emp/' + emp.id} >Display</Button>{' '}</td>
                          <td> <Button variant="warning" href={'/empedit/' + emp.id} >Edit</Button>{' '}</td>
                          <td> <Button variant="danger" href={'/empdel/' + emp.id} >Delete</Button>{' '}</td>
                           
                            
                        </tr>
                    ))}
      
    
                </tbody></Table></div>
    );
}