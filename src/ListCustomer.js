import { useEffect, useState } from "react";
import Table from 'react-bootstrap/esm/Table';
import Button from 'react-bootstrap/Button';
 export function Listcustomer(props){

  const [customer, setcustomer] = useState([]);
  useEffect(() => {
      fetch("http://localhost:8081/person/")
          .then(res => res.json())
          .then((result) => { setcustomer(result); }
          );
  }, []);
  return (
      <div>
          <h2 className="text-center">customer Data...</h2>
          <br></br>
          <Button variant='outline-info'  className='bton' href={'/custadd'}>Add customer
  </Button>
          <br></br>
          <br></br>
          <Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>Id</th>
        <th> First Name</th>
        <th>Last Name</th>
        
        <th>Show</th>
        <th>Update</th>
        <th>Remove</th>
        
      </tr>
    </thead>
    <tbody>
      {customer.map((cust,i) => (
                      <tr key={cust.id}>
                          <td>{i + 1}</td>
                          <td>{cust.firstname}</td>
                          <td>{cust.lastname}</td>
                          
                          
                          <td> <Button variant="success" href={'/cust/' +cust._id} >Display</Button>{' '}</td>
                          <td> <Button variant="warning" href={'/custedit/' + cust._id} >Edit</Button>{' '}</td>
                          <td> <Button variant="danger" href={'/custdel/' + cust._id} >Delete</Button>{' '}</td>
                         
                          
                      </tr>
                  ))}
    
  
              </tbody></Table></div>
  );
}