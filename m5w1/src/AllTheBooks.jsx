import React, { useState } from "react";
import { Card, Col, Row, Form, Button } from 'react-bootstrap';
import Books from './data/horror.json';
// import SingleBook from "./SingleBook";




function AllTheBooks() {
    const [inputBook, setInputBook] = useState("");
    function searchBook() {

            Books.filter((element) => {
                return (
                element.title.toLowerCase().includes(inputBook.target.value)
            )})

    }
    return (
        <div>
            <Form className="d-flex my-3">
                <Form.Group className="me-3 col-md-4">
                    <Form.Control
                        type="text"
                        placeholder="Search a book..."
                        value={inputBook}
                        onChange={(e) => setInputBook(e.target.value)}
                    />
                </Form.Group>
                <Button onClick={searchBook}>Search</Button>
            </Form>
            <Row className="g-2">
                {Books.map((Book) => {
                    return (
                        <Col lg={3} md={4} sm={6} key={Book.asin}>
                            <Card className="book-card my-2">
                                <Card.Img className="card-img" variant="top" src={Book.img} />
                                <Card.Body>
                                    <Card.Title className="fs-6 card-title">{Book.title}</Card.Title>
                                    <Card.Text>{"$" + Book.price}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}
    

export default AllTheBooks;