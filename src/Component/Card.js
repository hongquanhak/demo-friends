import React from 'react';
// import styles from './Card.module.css';


const Card = (props) => {
    const { name, email, id } = props;
    return (
        <div className='w-25 tc bg-light-gray dib br3 pa3 ma4 grow bw2 shadow-5'>
            <img alt='person' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;