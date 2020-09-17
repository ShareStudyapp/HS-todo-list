import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      test: 123,
      todoL: [
        { id: 0, content: '산책시키기', toAt: '2020/09/18/20:20:00' },
        { id: 1, content: '리액트 공부', toAt: '2020/09/19/10:25:00' },
        { id: 2, content: '운동', toAt: '2020/09/19/18:00:00' }
      ]
    }
  }
  render () {
    let list = this.state.todoL.reduce((accum, curr) => {
      accum.push(<li key={curr.id}>{curr.content}</li>)
      return accum
    }, [])
    return (
      <div className="App">
        {list}
        {/* commit test */}
        <form action="/create_process" method="post"
          onSubmit={function(e){
            e.preventDefault();
            let content = this.state.todoL.concat(
              { id:this.state.todoL.length, content: e.target.content.value, todoL: 'test' }
            )
            this.setState({
              todoL: content
            })
          }.bind(this)}>
          <input type="text" name="content" placeholder="타이틀을 입력해주세요."></input>
          <input type="submit"></input>
        </form>
     </div>
    );
  }
}

export default App;
