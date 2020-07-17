import React, { Component } from 'react';
import CardList from '../Component/CardList';
import { friends } from '../friends';
import SearchBox from '../Component/SearchBox';
import Scroll from '../Component/Scroll';
import './App.module.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            friends: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(respone => { return respone.json(); })
            .then(users => { this.setState({ friends: users }) })

    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })

    }
    render() {
        const { friends, searchField} = this.state;
        const filteredFriends = friends.filter(friend => {
            return friend.name.toLowerCase().includes(searchField.toLowerCase())
        })
        if (friends.length === 0) {
            return <h1>Loading</h1>
        }
        else {
            return (
                <div className='tc'>
                    <h1 className='f1'>Friends in Enclave</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList friends={filteredFriends} />
                    </Scroll>
                </div>
            );
        }

    }

}

export default App;