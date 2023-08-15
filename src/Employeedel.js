import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import Table from 'react-bootstrap/esm/Table';

export function Employeedel(props) {
    const [employee, setEmployee] = useState({});
    const { id } = useParams();
    let navigate = useNavigate();
    useEffect(() => {
        fetch("http://localhost:5221/api/Employee/" + id)
            .then(res => res.json())
            .then((result) => { setEmployee(result); }
            );
    }, {});
    const handledelete = (event) => {
        alert(id);
        fetch("http://localhost:5221/api/Employee/" + id, {
            method: 'Delete'
        })
            .then(res => console.log(res))
        navigate('/');
    }

    return (
        <div >
            <br></br>
            <br></br>
            <h1 style={{color:"red"} }  className="text-center"><big>R you sure to delete</big></h1>
           
            <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th> Name</th>
            <th>Email</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{employee.id}</td>
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.department}</td>
          </tr>
          </tbody>
          </Table>
          <br></br>
        <form>
            <button  className="text-center" onClick={handledelete}>Delete</button>
        </form>    
   
            
        </div>
    );
}

