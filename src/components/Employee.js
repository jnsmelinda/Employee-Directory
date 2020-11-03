import React from 'react';

class Employee extends React.Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
        <div className="card">
          <img className="card-img-top" src={this.props.employee.picture} alt={this.props.employee.name}></img>
          <div className="card-body">
            <h5 className="card-title">{this.props.employee.name}</h5>
            <ul className="list-group">
              <li className="list-group-item" id="employeeInfo">{this.props.employee.title}</li>
              <li className="list-group-item" id="employeeInfo">{this.props.employee.email}</li>
              <li className="list-group-item" id="employeeInfo">{this.props.employee.location}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Employee;
