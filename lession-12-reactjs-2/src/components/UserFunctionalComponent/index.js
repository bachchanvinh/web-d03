// import react from 'react'
import './style.css'

function UserFunctionalComponent(props) {
  const {name,age,gender} = props

  return (
    <div className="func-component">
      <p className="func-component_name">Name: {name}</p>
      <p className="func-component_age">Age: {age}</p>
      <p className="func-component_gender">Gender: {gender}</p>
    </div>
  );
}

export default UserFunctionalComponent;
