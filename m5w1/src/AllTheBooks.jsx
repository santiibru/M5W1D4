import React from "react";
import Card from 'react-bootstrap/Card';
import Books from './data/horror.json';
import Col from 'react-bootstrap/esm/Col';
import './App.css';

function AllTheBooks() {
    return (
        Books.map((el) => (
            <Col lg={3} md={4} sm={6}>
                <Card className="my-2">
                    <Card.Img className="card-img" variant="top" src={el.img} />
                    <Card.Body>
                        <Card.Title className="fs-6 card-title">{el.title}</Card.Title>
                        <Card.Text>{"$" + el.price}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        ))
    );
}

export default AllTheBooks;