import React from 'react';
import Employee from './Employee';

class Employees extends React.Component {
  render() {
    return (
      <div class="container">
        <div className="row">
          {
            this.props.employees.map((employee) =>
              <Employee employee={employee} />
            )
          }
        </div>
      </div>
    );
  }
}

export default Employees;
