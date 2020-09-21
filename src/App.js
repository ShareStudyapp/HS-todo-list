import React, { Component } from 'react';
import Category from "./components/Category"
import TodoList from "./components/TodoList"
import Create from "./components/Create"
import './assets/css/App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currCate: '전체',
      todoL: [
        { id: 0, category:'할일', title: '산책시키기', dese: 'descTest1', toAt: '2020/09/18/20:20:00' },
        { id: 1, category:'하는중',title: '리액트 공부', dese: 'descTest2', toAt: '2020/09/19/10:25:00' },
        { id: 2, category:'완료',title: '운동', dese: 'descTest3', toAt: '2020/09/19/18:00:00' },
        { id: 3, category:'보류',title: '앱 개발', dese: 'descTest4', toAt: '2020/09/20/18:00:00' }
      ]
    }
  }
  render () {
    return (
      <div className="App">
        <Category setCate={function(cate){
          this.setState({ currCate: cate });
        }.bind(this)}></Category>
        <hr/>
        <h2>{this.state.currCate}</h2>
        <TodoList currCate={this.state.currCate} todoL={this.state.todoL}></TodoList>
        <Create createTodo={function(title){
          let content = this.state.todoL.concat(
            { id:this.state.todoL.length, category: this.state.currCate, title: title, toAt: 'test' }
          )
          this.setState({ todoL: content })
        }.bind(this)}></Create>
     </div>
    );
  }
}

export default App;
