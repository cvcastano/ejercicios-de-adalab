import React from "react";
import RandomCat from "./RandomCat";
// import logo from './logo.svg';
// import './App.css';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//       </header>
//     </div>
//   );
// }

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <RandomCat/>
      </div>
    );
  }
}

export default App;
