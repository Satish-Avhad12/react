import { useEffect, useState } from "react";
import Table from 'react-bootstrap/esm/Table';
import Button from 'react-bootstrap/Button';
 export function ListProduct(props){

  const [product, setproduct] = useState([]);
  useEffect(() => {
      fetch("http://localhost:8080/api/products")
          .then(res => res.json())
          .then((result) => { setproduct(result); }
          );
  }, []);
  return (
      <div>
          <h2 className="text-center">Product Data...</h2>
          <br></br>
          <Button variant='outline-info'  className='bton' href={'/prdadd/'}>Add Product
  </Button>
          <br></br>
          <br></br>
          <Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>ID</th>
        <th> Name</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Show</th>
        <th>Update</th>
        <th>Remove</th>
        
      </tr>
    </thead>
    <tbody>
      {product.map(prd => (
                      <tr key={prd.id}>
                          <td>{prd.id}</td>
                          <td>{prd.name}</td>
                          <td>{prd.qty}</td>
                          <td>{prd.price}</td>
                          <td> <Button variant="success" href={'/prd/' + prd.id} >Display</Button>{' '}</td>
                          <td> <Button variant="warning" href={'/prdedit/' + prd.id} >Edit</Button>{' '}</td>
                          <td> <Button variant="danger" href={'/prddel/' + prd.id} >Delete</Button>{' '}</td>
                         
                          
                      </tr>
                  ))}
    
  
              </tbody></Table></div>
  );
}