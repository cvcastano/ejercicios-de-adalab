# Exercise 6

### User Info

( We are going to start from an object with information of a user that we have in the state of our component. We are going to initialize it to this value directly in the constructor. )  
I have actually iniciated it from " " but it would work the same.  
We are going to create a form where we are going to be able to modify the status fields.

![](https://github.com/cvcastano/ejercicios-de-adalab/blob/master/module%203/module-3-lesson-05-state-in-react/module-3-lesson-05-ex-06-user-info/capture.gif)

# App.js

```javascript
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      birthDate: {
        day: "",
        month: "",
        year: "",
      },
    };
    this.handleNameInput = this.handleNameInput.bind(this);
    this.handleDateInput = this.handleDateInput.bind(this);
  }

  handleNameInput(ev) {
    const target = ev.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  }

  handleDateInput(ev) {
    const target = ev.target;
    const name = target.name;
    const value = target.value;

    this.setState((prevState) => {
      return {
        birthDate: {
          ...prevState.birthDate,
          [name]: value,
        },
      };
    });
  }

  render() {
    return (
      <>
        <form action="" method="POST">
          <label htmlFor="fname">First name:</label>
          <input
            type="text"
            id="fname"
            name="firstName"
            defaultValue={this.state.firstName}
            onChange={this.handleNameInput}
          />
          <br />
          <label htmlFor="lname">Last name:</label>
          <input
            type="text"
            id="lname"
            name="lastName"
            defaultValue={this.state.lastName}
            onChange={this.handleNameInput}
          />
          <br />
          <label htmlFor="bdate">Birth date:</label>
          <input
            type="text"
            id="bdate"
            name="day"
            placeholder="day"
            defaultValue={this.state.birthDate.day}
            onChange={this.handleDateInput}
          />
          <input
            type="text"
            id="bdate"
            name="month"
            placeholder="month"
            defaultValue={this.state.birthDate.month}
            onChange={this.handleDateInput}
          />
          <input
            type="text"
            id="bdate"
            name="year"
            placeholder="year"
            defaultValue={this.state.birthDate.year}
            onChange={this.handleDateInput}
          />
        </form>
        <p>
          My name is {this.state.firstName} {this.state.lastName}, and my
          birthday is {this.state.birthDate.day} {this.state.birthDate.month}{" "}
          {this.state.birthDate.year}{" "}
        </p>
      </>
    );
  }
}

export default App;
```
