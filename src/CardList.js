import React from 'react';
import Card from './Card';

const CardList = ({ friends }) => {
    const cardArray = friends.map((user, i) => {
        return <Card
            key={i}
            id={friends[i].id}
            name={friends[i].name}
            email={friends[i].email} />
    })
    return (
        <div>
            {cardArray}
        </div>
    );
}

export default CardList;