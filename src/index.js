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
            footerText: 'iam the main footer',
            filtered: []
        }
    }
    getKeywords = (event) => {
        let keywords = event.target.value;
        let filtered = this.state.news.filter((item) => {
            return item.title.indexOf(keywords) > -1;
        })
        this.setState({
            filtered
        })
    }

    render() {
        const state = this.state;
        return (
            <>
                <Header keywords={this.getKeywords}/>
                <NewsList
                    news={this.state.filtered.length === 0 ? this.state.news : this.state.filtered}
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