import React from 'react';

class Employee extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "James",
            lastName: "Bond",
            email: "james@email.com",
        };
    }

    updateEmployeeState() {
        this.setState({
            firstName: "Paul",
            lastName: "Walker",
            email: "paul@email.com",
        });
    }

    render() {
        return(
            <div>
                <h1>Employee Details</h1>
                <p>{this.state.firstName}</p>
                <p>{this.state.lastName}</p>
                <p>{this.state.email}</p>
                <button onClick={() => this.updateEmployeeState()}>Update Employee</button>
            </div>
        );
    }
}

export default Employee;