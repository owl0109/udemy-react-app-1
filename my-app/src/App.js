import React,{Component} from 'react'
//prop-typesをインストール
import PropTypes from 'prop-types'


const App = () => {
  const profiles = [
    {name: "Taro",age: 10},
    {name: "Hanako", age: 11},
    {name: "No Name",age: 3}
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

//ここで定義
//isRequiredで入力必須を付与
User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
