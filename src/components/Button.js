import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button className="calc-button">1</button>
            </div>
        )
    }
}

export default Button;