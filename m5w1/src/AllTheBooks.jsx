import React from "react";
import Card from 'react-bootstrap/Card';
import Books from './data/horror.json';
import Col from 'react-bootstrap/esm/Col';

function AllTheBooks() {
    return (
        Books.map((el) => (
            <Col>
                <Card className="m-2" style={{ width: '15rem'}}>
                    <Card.Img variant="top" src={el.img} />
                    <Card.Body>
                        <Card.Title className="fs-6">{el.title}</Card.Title>
                        <Card.Text>{"$" + el.price}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        ))
    );
}

export default AllTheBooks;