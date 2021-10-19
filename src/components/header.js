import React, { Component } from 'react';



class Header extends Component {
    state = {

        keywords: '',

    }
    hello = () => {
        console.log('logo was clicked')
    }
    inputChange(event) {
        console.log(event.target.value)
        this.setState({
            keywords: event.target.value
        })
    }

    render() {
        return (
            <header>
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