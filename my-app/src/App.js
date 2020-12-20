//import React,{Component} from 'react'

//App => クラスコンポーネント
//class App extends Component{
  //render(){
    //return<div>～の箇所がJSX。可読性が高い
    //return<div>Hello World</div>
    //const greet = "Hi, Tom!"
    //const dom = <h1 className = "foo">{greet}</h1>;
    //return dom;

    //return(
      //<React.Fragment>
      //  <label htmlFor="Bar">Bar</label>
      //  <input type= "text" onChange={()=>console.log("I am Clicked!")}></input>
      //</React.Fragment>
    //);

    //内部処理はこんな感じ。かなり省略できる。
    //return React.createElement(
      //"div",
      //null,
      //"Hello world!"
    //)
  //}
//}

const App = () => {
  return( 
  <div>
    <Cat />
    <Cat />
    <Cat />
  </div>
  );
}

const Cat = () => {
  return <div>Yahoo!!</div>
}

export default App;
