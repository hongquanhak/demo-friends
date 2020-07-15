import React from 'react';
import './Card.module.css';


const Card = (props) => {
    const {name, email, id} = props;
    return (
        <div className="Card">
            <img alt='person' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;