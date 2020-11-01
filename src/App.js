import './App.css';
import React from 'react';
import employees from './employees.json';
import Employees from './components/Employees';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { employees };
  }

  render() {
    return (

      <div className="App">
        <div className="jumbotron">
          <h1 className="display-4">Employee Directory</h1>
        </div>
        <Employees employees={this.state.employees} />
      </div>
    );
  }
}

export default App;
