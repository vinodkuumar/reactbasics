import React, { Component } from 'react';

const style = {
    background: 'red'
}

class Header extends Component {
    state = {
        active: false,
        keywords: '',
    }
    hello = () => {
        console.log('logo was clicked')
    }
    inputChange(event) {
        const value = event.target.value === '' ? false : true;
        this.setState({
            active: value,
            keywords: event.target.value
        })
    }

    render() {
        return (
            <header style={{background: `${this.state.active ? 'red' : 'blue'}`}}>
                <div
                    className="logo"
                    onClick={this.hello}>Logo</div>
                <input
                    onChange={(event) => this.inputChange(event)} />

            </header>
        )
    }
}

export default Header;