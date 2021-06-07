# Exercise 3
### Time2Sleep

The company Time2Sleep has asked us for an evolutionary (which is what we call the functionalities that are added to an existing project) to add a clock to the website. 
We are going to create a clock component (Clock) that shows us the time at every moment.  
It will have an updateClock() method in the component to update the state with setState(/* object */), which will update the time with new Date().   
In the component constructor we will declare a setInterval() that executes updateClock every second.  
- HINT: to obtain the time information with a date type object, we can use the getHours, getMinutes and getSeconds methods as explained in the MDN page.  

- NOTE: when making changes to the component once you have set the setInterval, reload the page completely manually. Otherwise, all the setIntervals that we have defined will continue to be executed and the page may be overloaded.  
We will be able to control this problem through the code when we see the life cycle of the React components.

![]()

# App.js 
```javascript
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
```
