import './SingleBook.css';
import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import CommentArea from './CommentArea';


 

export default function SingleBook({Book}) {
    const [selected, setSelected] = useState(false)
    return (
        <>
        <Card onClick={() => setSelected(!selected)} style={{border: selected ? "2px solid red" : "none"}} className="cards my-2">
        <Card.Img className="card-img" variant="top" src={Book.img} />
        <Card.Body>
            <Card.Title className="fs-6 card-title">{Book.title}</Card.Title>
                <Card.Text>{"$" + Book.price}</Card.Text>
        </Card.Body>
        </Card>
        {selected && <CommentArea asin={Book.asin} />}
        </> 
    )
}

