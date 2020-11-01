import React from 'react';

class Employee extends React.Component {
  render() {
    return (
      <div className="col-3">
        <div className="card">
          <img className="card-img-top" src={this.props.employee.picture} alt={this.props.employee.name}></img>
          <div className="card-body">
            <h5 className="card-title">{this.props.employee.name}</h5>
            <h6 className="card-subtitle sm-2 text-muted"> {this.props.employee.title}</h6>
            <h6 className="card-subtitle sm-2 text-muted"> {this.props.employee.email}</h6>
            <h6 className="card-subtitle sm-2 text-muted"> {this.props.employee.location}</h6>
          </div>
        </div>
      </div>
    );
  }
}

export default Employee;
