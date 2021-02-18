import React from 'react';

class HalfPage extends React.Component {
    render() {

        return (
            <div className="half-page">
                <h1>{this.props.title}</h1>
                {this.props.children}
            </div>
        );
    }
}

export default HalfPage;