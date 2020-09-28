import TodoList from "../components/TodoList"
import {connect} from 'react-redux'

function stateToProps(state) {
  return {
    _currCate: state._currCate,
    _todoL: state._todoL,
  }
}
function dispatchToProps(dispatch) {
  return {}
}
export default connect(stateToProps, dispatchToProps)(TodoList);


