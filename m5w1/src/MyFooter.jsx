import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MyFooter() {
  return (
    <Card className="text-center my-5">
      <Card.Body>
        <Card.Title>EPIBOOKS</Card.Title>
        <Card.Text>
        © 2024 Copyright: Epibooks SRL
        </Card.Text>
        <Button variant="primary">Contact Us</Button>
      </Card.Body>
    </Card>
  );
}

export default MyFooter;