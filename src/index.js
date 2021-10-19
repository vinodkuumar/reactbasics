import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import NewsList from './components/news-list';

import JSON from './db.json';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            news: JSON
        }
    }
    render() {
        return(
            <>
            <Header />
            <NewsList 
                news={this.state.news}
                hello={true}/>
            </>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));