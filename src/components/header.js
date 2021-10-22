import React, { Component } from 'react';

const style = {
    background: 'red'
}

class Header extends Component {
    hello = () => {
        console.log('logo was clicked')
    }
    // state = {
    //     active: false,
    //     keywords: '',
    // }
    
    // inputChange(event) {
    //     const value = event.target.value === '' ? false : true;
    //     this.setState({
    //         active: value,
    //         keywords: event.target.value
    //     })
    // }

    render() {
        return (
            <header>
                <div
                    className="logo"
                    onClick={this.hello}>Logo</div>
                <input
                    onChange={this.props.keywords} />
            </header>
        )
    }
}

export default Header;