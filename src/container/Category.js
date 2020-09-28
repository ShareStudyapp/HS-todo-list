import Category from "../components/Category"
import {connect} from 'react-redux'

function dispatchToProps(dispatch) {
  return {
    setCate:function(cate){
      dispatch({type: 'setCurrCate', cate: cate})
    }
  }
}
export default connect(null, dispatchToProps)(Category);


