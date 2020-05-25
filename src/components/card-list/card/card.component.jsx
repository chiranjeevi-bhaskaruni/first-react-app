import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

export const MyCard = (props) => { 
    return (
        <Col>
        <Card style={{ width: '18rem' }} className="m-3">
        <Card.Img variant="top" src={`https://robohash.org/${props.user.id}?set=set4&size=180x180`} />
        <Card.Body>
        <Card.Title>{props.user.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.user.phone}</Card.Subtitle>
        <Card.Link href="#">{props.user.email}</Card.Link>
        <Card.Link href="#">{props.user.website}</Card.Link>
        </Card.Body>
        </Card>
        </Col>
        )
    }
    /* <div>
        <h1>{props.user.name}</h1>
        <p>{props.user.email}</p>
    </div> */