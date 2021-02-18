import React from 'react';

class HalfPage extends React.Component {
    render() {

        return (
            <div className="half-page">
                <h1>{this.props.title}</h1>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default HalfPage;