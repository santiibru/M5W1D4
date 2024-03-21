import React, { useState } from "react";
import { Col, Row, Form} from 'react-bootstrap';
import Books from '../data/horror.json';
import SingleBook from "./SingleBook";




function AllTheBooks() {
    const [inputBook, setInputBook] = useState("");
   
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
                    
                </Form>
                <Row className="g-2">
                    {Books.filter(el =>
                        el.title.toLowerCase().includes(inputBook)).map((Book) => {
                        
                            return (
                                <Col lg={3} md={4} sm={6} key={Book.asin}>
                                    <SingleBook 
                                    Book={Book}
                                    />
                                </Col>
                            )
                        })}
                </Row>
            </div>
        )
}

    

export default AllTheBooks;