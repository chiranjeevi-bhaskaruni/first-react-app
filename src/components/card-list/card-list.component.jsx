import React from 'react';
import { MyCard } from './card/card.component';
import './card-list.component.css';

export const CardList = (props) => {
    return (
        <div className="CardList m-3">
            {
                props.users.map((user, index) => <MyCard key={index} user={user} />)
            }
        </div>
    )
}