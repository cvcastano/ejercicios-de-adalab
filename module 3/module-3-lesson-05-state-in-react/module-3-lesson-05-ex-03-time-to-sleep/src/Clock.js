import React from 'react';

class Clock extends React.Component {
    constructor() {
        super();
        this.state = {
            time: ''
        };
        this.updateClock = this.updateClock.bind(this);
        setInterval(this.updateClock, 1000)
    }
    updateClock() {
        const now = new Date();
        const clock = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

        this.setState({
            time: clock
        })
    }
    render() {
        return (
            <div className="clock">
                <p>{this.state.time}</p>
            </div>
        );
    }
}
export default Clock;