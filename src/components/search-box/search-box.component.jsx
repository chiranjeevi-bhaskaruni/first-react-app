import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

export const SearchBox = ({placeholder, handleChange}) => (
    <InputGroup className="mb-3">
          <FormControl placeholder={placeholder} onChange={handleChange}/>
        </InputGroup>
)