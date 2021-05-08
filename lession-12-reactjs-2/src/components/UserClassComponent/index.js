import React from 'react';
import './style.css'

class UserClassComponent extends React.Component {
  
  // constructor(props){
  //   super(props)
  //   
  // }
  render() {
    const { name, age, gender } = this.props
    return (
      <div className="class-component">
        <p className="class-component_name">Name: {name}</p>
        <p className="class-component_age">Age: {age}</p>
        <p className="class-component_gender">Gender: {gender}</p>
      </div>
    )
  }
}

export default UserClassComponent;
