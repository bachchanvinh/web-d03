// import react from 'react'


function FunctionalComponent(props) {
  const {name,age,gender} = props

  return (
    <div className="functional-component">
      <h1 className="name">Name: {name}</h1>
      <h2 className="age">Age = {age}</h2>
      <h2 className="gender">Gender = {gender}</h2>
    </div>
  );
}

export default FunctionalComponent;
