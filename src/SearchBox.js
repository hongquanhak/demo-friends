import React from 'react';

const SearchBox = ({searchField, searchChange}) => {
    return (
        <div className='pas2'>
            <input 
            className='pa3 ba b--green bg-lightest-blue'
            type='search' 
            placeholder='search friends' 
            onChange={searchChange}
            />
        </div>
    );
}


export default SearchBox;