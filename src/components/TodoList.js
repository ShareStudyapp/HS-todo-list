import React, { Component } from 'react';
import '../App.css';

class App extends Component {
  render () {
    let list = this.props.todoL.reduce((accum, curr) => {
      if (this.props.currCate === '전체') accum.push(<div key={curr.id}>{curr.title}</div>)
      else if(curr.category === this.props.currCate) accum.push(<div key={curr.id}>{curr.title}</div>)
      return accum
    }, [])
    return (
      <div>
        {list}
     </div>
    );
  }
}

export default App;
