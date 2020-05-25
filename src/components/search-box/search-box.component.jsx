import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const SearchBox = ({placeholder, handleChange}) => (
    <div className="d-flex justify-content-center">
    <Row>
    <Col md="auto">
    <InputGroup>
          <FormControl placeholder={placeholder} onChange={handleChange}/>
        </InputGroup>
        </Col>
        </Row>
    </div>
)