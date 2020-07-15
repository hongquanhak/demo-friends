import React from 'react';
import Card from './Card';

const CardList = ({ friends }) => {
    const cardComponent = friends.map((user, i) => {
        return <Card id={friends[i].id} name={friends[i].name} email={friends[i].email} />
    })
    return (
        <div>
            {cardComponent}
        </div>
    );
}

export default CardList;