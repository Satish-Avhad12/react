import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Table from 'react-bootstrap/esm/Table';
export function Productdel(){

    const [product,setproduct]=useState({})
    const {id}=useParams()
    const navigate= useNavigate()
    useEffect (()=>{
        fetch("http://localhost:8080/api/productsById/"+id)
        .then(res=>res.json()).then(result=> setproduct(result))
    },{});

    const handledelete=(event)=>{
        
         fetch("http://localhost:8080/api/products/"+ id,{method : 'Delete'})
       navigate('/')
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
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.email}</td>
                <td>{product.department}</td>
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