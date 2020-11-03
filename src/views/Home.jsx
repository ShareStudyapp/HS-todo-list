import React, {} from 'react';
import Category from "../container/Category"
import TodoList from "../container/TodoList"
import Create from "../container/Create"
import store from '../store';
import {connect} from 'react-redux'
import '../assets/css/App.css';

import styled, { css, createGlobalStyle } from 'styled-components'

function stateToProps(state) {
  return {
    _currCate: state._currCate
  }
}

export default connect(stateToProps, null)(Home);

const GlobalStyle = createGlobalStyle `
  body {
    background-color: red;
  }
`;
const mixin = css`
  background-color: ${props => (props.red ? 'red' : 'blue')};
  border: none;
  font-size: 30px;
  color: white;
`
const TestDiv = styled.div`
  width: 100px;
  height: 50px;
  ${mixin};
`;
const Anchor = styled(TestDiv.withComponent("a"))`
  color: red;
`;
const Anchor2 = TestDiv.withComponent("a");
const Testinput = styled.input.attrs({
  required: true
})``;
function Home (props) {
  return (
    <div className="Home">
      {/* <GlobalStyle /> */}
      <Category></Category>
      <TestDiv/>
      <TestDiv red/>
      <Anchor href="https://www.naver.com">test</Anchor>
      <Anchor2 href="https://www.google.com">google</Anchor2>
      <Testinput />
      <hr className="mainHr"/>
      <h2>{store.getState()._currCate}</h2>
      <TodoList></TodoList>
      <Create></Create>
     </div>
  )
}

