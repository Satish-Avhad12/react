import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
function Customer() {
    const [customer, setcustomer] = useState({});
    const { id } = useParams()
    console.log(useParams())
    useEffect(() => {
        
        fetch("http://localhost:8081/person/" + id)
            .then(res => res.json())
            .then((result) => { setcustomer(result); }
            );
    }, {});

  return (
    <div  >
    <Card style={{ width: '18rem' }}>
      
      <br></br>
      
      <Card.Body>
        <Card.Title  style={{textAlign:'center'}}>Profile Data</Card.Title>
        <Card.Img variant="top"  src="/Images/Profile.png" style={{padding:'10px',background:'green'}}/>
        <br></br>
        <br></br>
         <Card.Text>FirstName :
            {customer.firstname}
         </Card.Text>
         <Card.Text>LastName :
            {customer.lastname}
         </Card.Text>
         
        <Button variant="dark" href='/ListCustomer'>Back</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Customer;