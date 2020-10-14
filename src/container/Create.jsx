import Create from "../components/Create"
import {connect} from 'react-redux'

function dispatchToProps(dispatch) {
  return {
    createTodo: function(title){
      dispatch({type: 'setTodoL', title: title})
    }
  }
}
export default connect(null, dispatchToProps)(Create);


