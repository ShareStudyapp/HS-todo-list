import React, { useState } from 'react';
import '../assets/css/App.css';
import store from '../store';

function TodoList (props) {
  let list = store.getState()._todoL.reduce((accum, curr) => {
    if (store.getState()._currCate === '전체') accum.push(<div key={curr.id}>{curr.title}</div>)
    else if(store.getState()._currCate === curr.category) accum.push(<div key={curr.id}>{curr.title}</div>)
    return accum
  }, [])
  return (
    <div>
      {list}
    </div>
  )
}

export default TodoList;
