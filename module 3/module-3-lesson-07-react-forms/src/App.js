import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      language: ''
    };
    this.handleTitle = this.handleTitle.bind(this);
    this.handleLanguage = this.handleLanguage.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
  }
  handleTitle(ev) {
    this.setState({
      title: ev.target.value
    })
  }
  handleLanguage(ev) {
    this.setState({
      language: ev.target.value
    })
  }
  handleDescription(ev) {
    this.setState({
      description: ev.target.value
    })
  }

  renderLanguage () {
    if (this.state.language === 'Spanish') {
      return 'Spanish';
    } else if (this.state.language === 'English') {
        return 'English';
    }  else if (this.state.language === 'Portuguese') {
      return 'Portuguese';
    }
  }

  render() {
    console.log(this.state)
    return (
      <div >
        <form className="App">
          <label>
            Title:
          <input type="text" id="title" onChange={this.handleTitle} />
          </label>
          <label>
            Description:
          <textarea id="description" onChange= {this.handleDescription} />
          </label>
          <label>
            Language:
          <select id="language" onChange={this.handleLanguage}>
              <option value="Spanish">Spanish</option>
              <option value="English">English</option>
              <option value="Portuguese">Portuguese</option>
            </select>
          </label>
        </form>
        <div className="card">
          <p>Title: {this.state.title} </p>
          <p>Description: {this.state.description}</p>
          <p>Language: {this.renderLanguage()} </p>
        </div>
      </div>
    );
  }
}

export default App;
