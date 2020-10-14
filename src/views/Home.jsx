import React, {} from 'react';
import Category from "../container/Category"
import TodoList from "../container/TodoList"
import Create from "../container/Create"
import '../assets/css/App.css';
import store from '../store';
import {connect} from 'react-redux'


function stateToProps(state) {
  return {
    _currCate: state._currCate
  }
}
export default connect(stateToProps, null)(Home);

function Home (props) {
  return (
    <div className="Home">
      <Category></Category>
      <hr className="mainHr"/>
      <h2>{store.getState()._currCate}</h2>
      <TodoList></TodoList>
      <Create></Create>
     </div>
  )
}
