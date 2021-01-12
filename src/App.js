import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Employees from "./Employees.json"
// import API from "/utils/API";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    Employees
  };

  removeEmployee = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const Employees = this.state.Employees.filter(Employee => Employee.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ Employees });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Employee List</Title>
        {this.state.Employees.map(Employee => (
          <EmployeeCard
            removeEmployee={this.removeEmployee}
            id={Employee.id}
            key={Employee.id}
            name={Employee.name}
            image={Employee.image}
            occupation={Employee.occupation}
            location={Employee.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
