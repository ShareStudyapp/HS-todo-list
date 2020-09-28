import React, { useState } from 'react';
import '../assets/css/App.css';

function Create (props) {
  return (
    <form action="/create_process" method="post"
      onSubmit={function(e){
        e.preventDefault();
        props.createTodo(e.target.title.value);
      }}>
      <input type="text" name="title" placeholder="타이틀을 입력해주세요."></input>
      <input type="submit"></input>
    </form>
  )
}

export default Create;
