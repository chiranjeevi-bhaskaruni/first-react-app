import React from 'react';

export const Member = (props) => {
    console.log("Member Props: ", props);
    return (
        <h1>{props.member}</h1>
    );
}