import './App.css';
import React from 'react';
import employees from './employees.json';
import Employees from './components/Employees';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { employees: this.searchAndSort(employees, '', 'name'), searchTerm: '', sortBy: 'name' };
  }

  handleNameSearchChange(event) {
    this.setState({ searchTerm: event.target.value, employees: this.searchAndSort(employees, event.target.value, this.state.sortBy) });
  }

  handleSortChange(event) {
    this.setState({ sortBy: event.target.value, employees: this.searchAndSort(employees, this.state.searchTerm, event.target.value) });
  }

  searchAndSort(employees, searchTerm, sortBy) {
    return employees
      .filter(employee => employee.name.toLocaleLowerCase().includes(searchTerm.trim().toLocaleLowerCase()))
      .sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  }

  render() {
    return (
      <div className="App">
        <div className="jumbotron">
          <h1 className="display-4">Employee Directory</h1>
        </div>
        <div className="row">
          <input type="text" className="form-control" onChange={(event) => this.handleNameSearchChange(event)}></input>
          <select className="form-control" onChange={(event) => this.handleSortChange(event)}>
            <option selected>name</option>
            <option>title</option>
            <option>email</option>
            <option>location</option>
          </select>
        </div>
        <Employees employees={this.state.employees} />
      </div>
    );
  }
}

export default App;
