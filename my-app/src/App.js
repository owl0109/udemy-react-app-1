//import React,{Component} from 'react'

//これがpropsの使い方
const App = () => {
  const profiles = [
    {name: "Taro",age: 10},
    {name: "Hanako", age: 11},
    {name: "NoName"}
  ]
  return( 
  <div>
    {
      profiles.map((profile,index)=>{
        return <User name = {profile.name} age ={profile.age} key = {index}/>
      })
    }
  </div>
  );
}

const User = (props) => {
  return <div>HI I am {props.name}!!, and {props.age}</div>
}

User.defaultProps = {
  age : 1
}

export default App;
