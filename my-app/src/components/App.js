import React,{Component} from 'react'
//prop-typesをインストール


const App = () => (<Counter></Counter>);


class Counter extends Component {
  //初期化処理
  constructor(props){
    super(props)
    this.state = {count: 0}
  }

  handlePlusButton = () => {
    //setStateを使ってstateの内容を変更する
    this.setState({count: this.state.count + 1})
  }

  handleMinusButton = ()=>{
    this.setState({count: this.state.count - 1})
  }

  //処理内容
  render(){
    return (
      <React.Fragment>
        <div>count：{this.state.count}</div>
        <button onClick = {this.handlePlusButton}>+1</button>
        <button onClick = {this.handleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}

export default App;
