import React from 'react';
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/esm/Table';
import { useParams } from "react-router-dom"
  export function Product() {
    const [product, setproduct] = useState({});
    const { id } = useParams()
    console.log(useParams())
    useEffect(() => {
        
        fetch("http://localhost:8080/api/productsById/" + id)
            .then(res => res.json())
            .then((result) => { setproduct(result); }
            );
    }, {});
    return (
        
        <Table striped bordered hover variant="light">
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
            <td>{product.qty}</td>
            <td>{product.price}</td>
          </tr>
          </tbody>
          </Table>
    );
}