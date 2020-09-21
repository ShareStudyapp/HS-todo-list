import React, { Component } from 'react';
import '../assets/css/App.css';

class App extends Component {
  render () {
    let list = this.props.todoL.reduce((accum, curr) => {
      if (this.props.currCate === '전체') accum.push(<div key={curr.id}>{curr.title}</div>)
      else if(this.props.currCate === curr.category) accum.push(<div key={curr.id}>{curr.title}</div>)
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
