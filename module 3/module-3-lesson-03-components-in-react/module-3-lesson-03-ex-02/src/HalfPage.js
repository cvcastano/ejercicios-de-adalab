import React from 'react';

class HalfPage extends React.Component {
    render() {

        return (
            <div className="half-page">
                <h2>{this.props.title}</h2>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default HalfPage;