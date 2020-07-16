import React, { Component } from 'react';
import CardList from './CardList';
import { friends } from './friends';
import SearchBox from './SearchBox';

class App extends Component {
    constructor() {
        super()
        this.state = {
            friends: friends,
            searchField: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })

    }
    render() {
        const filteredFriends = this.state.friends.filter(friend => {
            return friend.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        return (
            <div className='tc'>
                <h1>Friends in Enclave</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList friends={filteredFriends} />
            </div>
        );
    }

}

export default App;