import React, { Component } from 'react';
import '../App.css';

class Create extends Component {
  render () {
    return (
        <form action="/create_process" method="post"
          onSubmit={function(e){
            e.preventDefault();
            this.props.createTodo(e.target.title.value);
          }.bind(this)}>
          <input type="text" name="title" placeholder="타이틀을 입력해주세요."></input>
          <input type="submit"></input>
        </form>
    );
  }
}

export default Create;
