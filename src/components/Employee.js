import React from 'react';

class Employee extends React.Component {
  render() {
    return (
      <div className="card col-3">
        <div className="card-body">
          <h5 className="card-title">{this.props.employee.name}</h5>
          <h6 className="card-subtitle sm-2 text-muted"> {this.props.employee.title}</h6>
        </div>
      </div>
    );
  }
}

export default Employee;
