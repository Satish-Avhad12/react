import Card from 'react-bootstrap/Card';
export function Footer(){

return(
 
      <Card className="text-center">
        
        <Card.Body>
          <Card.Title style={{color:'white', backgroundColor: ("Grey")}}>Project done by!</Card.Title>
          <Card.Text style={{color:'green'}}>
           <b> Satish Avhad!</b>
          </Card.Text>
          
        </Card.Body>
      {/*<Card.Footer className="text-muted">Vitamins!</Card.Footer>*/}
</Card>

    );
  }
  

