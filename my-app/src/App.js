import React,{Component} from 'react'

class App extends Component{
  render(){
    //return<div>～の箇所がJSX。可読性が高い
    //return<div>Hello World</div>
    return<h1>Hello World</h1>

    //内部処理はこんな感じ。かなり省略できる。
    //return React.createElement(
      //"div",
      //null,
      //"Hello world!"
    //)
  }
}

export default App;
