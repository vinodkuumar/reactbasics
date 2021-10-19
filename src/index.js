import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import NewsList from './components/news-list';
import Footer from './components/Footer';

import './styles/styles.css';

import JSON from './db.json';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            news: JSON,
            footerText: 'iam the main footer'
        }
    }
    render() {
        const state = this.state;
        return (
            <>
                <Header />
                <NewsList
                    news={state.news}
                    hello={true}>
                    <br />
                    <h1>iam a children</h1>
                    </NewsList>
                <Footer 
                    footerText={state.footerText}
                    />
            </>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));